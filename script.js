// Modal Logic
function openModal(itemTitle) {
    const modal = document.getElementById('requestModal');
    const title = document.getElementById('modalTitle');
    title.textContent = `Request ${itemTitle}`;
    modal.classList.add('open');
}

function closeModal() {
    const modal = document.getElementById('requestModal');
    modal.classList.remove('open');
}

// Close modal if clicking outside content
window.onclick = function (event) {
    const modal = document.getElementById('requestModal');
    if (event.target == modal) {
        closeModal();
    }
}

// Form Logic
let formData = {};
let nextAssignmentID = '';

// Auth Credentials
const username = 'murshid@pega.com';
const password = 'Rules123!';
const authHeader = 'Basic ' + btoa(username + ':' + password);

async function handleSubmit(event) {
    event.preventDefault();

    const submitBtn = document.querySelector('#requestForm button[type="submit"]');
    const originalBtnText = submitBtn.textContent;
    submitBtn.textContent = 'Processing...';
    submitBtn.disabled = true;

    // Capture data
    formData = {
        name: document.getElementById('Name').value,
        email: document.getElementById('Email').value,
        location: document.getElementById('location').value
    };

    try {
        // 1. Create Case API
        const response = await fetch('/prweb/api/v1/cases', {
            method: 'POST',
            headers: {
                'Authorization': authHeader,
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                caseTypeID: "MyOrg-ITServices-Work-Earphone",
                processID: "",
                parentCaseID: "",
                content: {
                    "Email": formData.email,
                    "Name": formData.name,
                    "Location": formData.location
                }
            })
        });

        if (!response.ok) throw new Error('Failed to create case');

        const data = await response.json();
        console.log('Case Created:', data);
        nextAssignmentID = data.nextAssignmentID;

        // Close form modal, open confirm modal
        document.getElementById('requestModal').classList.remove('open');
        document.getElementById('confirmModal').classList.add('open');

    } catch (error) {
        console.error('Error:', error);
        alert('Failed to initiate request. Please check console for details.');
    } finally {
        submitBtn.textContent = originalBtnText;
        submitBtn.disabled = false;
    }
}

async function handleFinalConfirm() {
    if (!nextAssignmentID) {
        alert('No assignment ID found. Cannot proceed.');
        return;
    }

    const confirmBtn = document.querySelector('#confirmModal .btn-primary');
    const originalBtnText = confirmBtn.textContent;
    confirmBtn.textContent = 'Submitting...';
    confirmBtn.disabled = true;

    try {
        // 2. Submit Details API
        const url = `/prweb/api/v1/assignments/${nextAssignmentID}?actionID=CollectRequestorDetails`;

        const response = await fetch(url, {
            method: 'POST',
            headers: {
                'Authorization': authHeader,
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                content: {} // Sending empty content as instructed, or mapping if needed
            })
        });

        if (!response.ok) throw new Error('Failed to submit details');

        const data = await response.json();
        console.log('Details Submitted:', data);

        window.location.href = 'confirmation.html';

    } catch (error) {
        console.error('Error:', error);
        alert('Failed to submit confirmation. Please check console for details.');
    } finally {
        confirmBtn.textContent = originalBtnText;
        confirmBtn.disabled = false;
    }
}

function cancelConfirm() {
    document.getElementById('confirmModal').classList.remove('open');
    // Optionally re-open the request modal if desired, or just stay on page
    document.getElementById('requestModal').classList.add('open');
}

// Expose functions to global scope for inline event handlers
window.openModal = openModal;
window.closeModal = closeModal;
window.handleSubmit = handleSubmit;
window.handleFinalConfirm = handleFinalConfirm;
window.cancelConfirm = cancelConfirm;
