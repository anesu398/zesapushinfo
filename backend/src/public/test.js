document.addEventListener("DOMContentLoaded", function () {
    // Set the base URL
    const baseUrl = "http://localhost:3000";
    
    // Initialize the first tab
    openTab(event, 'request-1');
});

function openTab(evt, tabId) {
    const tabContents = document.querySelectorAll(".tab-content");
    tabContents.forEach(content => content.classList.remove("active"));
    
    const tabs = document.querySelectorAll(".tab");
    tabs.forEach(tab => tab.classList.remove("active"));
    
    document.getElementById(tabId).classList.add("active");
    evt.currentTarget.classList.add("active");
}

function addTab() {
    const requestTabs = document.querySelector(".request-tabs");
    const tabCount = requestTabs.querySelectorAll(".tab").length;
    const newTabId = `request-${tabCount + 1}`;
    
    const newTab = document.createElement("div");
    newTab.className = "tab";
    newTab.innerText = `Request ${tabCount + 1}`;
    newTab.onclick = (event) => openTab(event, newTabId);
    
    const newContent = document.createElement("div");
    newContent.id = newTabId;
    newContent.className = "tab-content";
    newContent.innerHTML = `
        <div class="request-header">
            <select id="method-${tabCount + 1}">
                <option value="GET">GET</option>
                <option value="POST">POST</option>
                <option value="PUT">PUT</option>
                <option value="DELETE">DELETE</option>
            </select>
            <input type="text" id="url-${tabCount + 1}" placeholder="Enter request URL here">
            <button onclick="sendRequest('${newTabId}')">Send</button>
        </div>
        <div class="request-params">
            <h3>Headers</h3>
            <div id="headers-${tabCount + 1}" class="params"></div>
            <button onclick="addHeader('headers-${tabCount + 1}')">Add Header</button>
        </div>
        <div class="request-body">
            <h3>Body</h3>
            <textarea id="body-${tabCount + 1}" placeholder="Enter request body here"></textarea>
        </div>
    `;
    
    requestTabs.insertBefore(newTab, requestTabs.querySelector(".add-tab"));
    document.querySelector(".request-content").appendChild(newContent);
}

function addHeader(containerId) {
    const container = document.getElementById(containerId);
    const headerCount = container.querySelectorAll(".param").length;
    
    const newHeader = document.createElement("div");
    newHeader.className = "param";
    newHeader.innerHTML = `
        <input type="text" placeholder="Header Key">
        <input type="text" placeholder="Header Value">
        <button onclick="removeHeader(this)">Remove</button>
    `;
    
    container.appendChild(newHeader);
}

function removeHeader(button) {
    button.parentElement.remove();
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
    } catch (error) {
        document.getElementById("response-content").textContent = "Error: " + error.message;
    }
}
