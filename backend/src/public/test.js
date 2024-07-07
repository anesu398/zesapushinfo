document.addEventListener('DOMContentLoaded', () => {
    loadEnvironments();
    loadCollections();
    loadHistory();
});

function toggleDarkMode() {
    document.body.classList.toggle('dark-mode');
}

function addTab() {
    const requestTabs = document.querySelector(".request-tabs");
    const newTabId = `request-${requestTabs.children.length}`;
    const newTab = document.createElement("div");
    newTab.className = "tab";
    newTab.textContent = `Request ${requestTabs.children.length}`;
    newTab.onclick = (event) => openTab(event, newTabId);
    requestTabs.insertBefore(newTab, requestTabs.querySelector(".add-tab"));

    const newContent = document.createElement("div");
    newContent.id = newTabId;
    newContent.className = "tab-content";
    newContent.innerHTML = `
        <div class="request-header">
            <select id="method-${newTabId.split('-')[1]}">
                <option value="GET">GET</option>
                <option value="POST">POST</option>
                <option value="PUT">PUT</option>
                <option value="DELETE">DELETE</option>
            </select>
            <input type="text" id="url-${newTabId.split('-')[1]}" placeholder="Enter request URL here">
            <button onclick="sendRequest('${newTabId}')">Send</button>
        </div>
        <div class="auth-section">
            <h3>Authentication</h3>
            <select id="auth-type-${newTabId.split('-')[1]}">
                <option value="None">None</option>
                <option value="Basic">Basic Auth</option>
                <option value="Bearer">Bearer Token</option>
                <option value="OAuth2">OAuth2</option>
            </select>
            <div id="auth-credentials-${newTabId.split('-')[1]}"></div>
        </div>
        <div class="request-params">
            <h3>Headers</h3>
            <div id="headers-${newTabId.split('-')[1]}" class="params"></div>
            <button onclick="addHeader('headers-${newTabId.split('-')[1]}')">Add Header</button>
        </div>
        <div class="request-body">
            <h3>Body</h3>
            <textarea id="body-${newTabId.split('-')[1]}" placeholder="Enter request body here"></textarea>
        </div>
    `;
    document.querySelector(".request-content").appendChild(newContent);
    openTab({ currentTarget: newTab }, newTabId);
}

function openTab(event, tabId) {
    document.querySelectorAll(".tab, .tab-content").forEach(el => el.classList.remove("active"));
    event.currentTarget.classList.add("active");
    document.getElementById(tabId).classList.add("active");
}

function addHeader(headersId) {
    const headersContainer = document.getElementById(headersId);
    const paramDiv = document.createElement("div");
    paramDiv.className = "param";
    paramDiv.innerHTML = `
        <input type="text" placeholder="Header Key">
        <input type="text" placeholder="Header Value">
    `;
    headersContainer.appendChild(paramDiv);
}

function loadHistoryItem(historyItem) {
    const currentTab = document.querySelector(".tab-content.active");
    const tabId = currentTab.id.split('-')[1];

    document.getElementById(`method-${tabId}`).value = historyItem.method;
    document.getElementById(`url-${tabId}`).value = historyItem.url;

    const headersContainer = document.getElementById(`headers-${tabId}`);
    headersContainer.innerHTML = "";
    historyItem.headers.forEach(header => {
        const paramDiv = document.createElement("div");
        paramDiv.className = "param";
        paramDiv.innerHTML = `
            <input type="text" value="${header.key}" placeholder="Header Key">
            <input type="text" value="${header.value}" placeholder="Header Value">
        `;
        headersContainer.appendChild(paramDiv);
    });

    document.getElementById(`body-${tabId}`).value = historyItem.body;
}

function saveRequestToHistory(request) {
    const history = JSON.parse(localStorage.getItem("history")) || [];
    history.push(request);
    localStorage.setItem("history", JSON.stringify(history));
    loadHistory();
}

async function sendRequest(tabId) {
    const method = document.getElementById(`method-${tabId.split('-')[1]}`).value;
    const url = document.getElementById(`url-${tabId.split('-')[1]}`).value;
    const headersContainer = document.getElementById(`headers-${tabId.split('-')[1]}`);
    const body = document.getElementById(`body-${tabId.split('-')[1]}`).value;

    const headers = {};
    headersContainer.querySelectorAll(".param").forEach(param => {
        const key = param.querySelector("input:first-child").value;
        const value = param.querySelector("input:last-child").value;
        if (key && value) headers[key] = value;
    });

    const options = {
        method,
        headers,
        body: body ? JSON.stringify(JSON.parse(body)) : null
    };

    try {
        const response = await fetch(url, options);
        const data = await response.json();
        document.getElementById("response-content").textContent = JSON.stringify(data, null, 2);

        // Save request to history
        const request = {
            method,
            url,
            headers: Object.entries(headers).map(([key, value]) => ({ key, value })),
            body
        };
        saveRequestToHistory(request);
    } catch (error) {
        document.getElementById("response-content").textContent = "Error: " + error.message;
    }
}
