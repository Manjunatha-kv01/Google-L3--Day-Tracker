const demoData = [
  { day: 1, topic: 'Arrays and Strings', status: 'Done', notes: 'Solved 3 medium problems.' },
  { day: 2, topic: 'Hash Maps', status: 'In Progress', notes: 'Practiced frequency counting.' },
  { day: 3, topic: 'Two Pointers', status: 'Todo', notes: 'Add practice set.' }
];

const storageKey = 'google-l3-tracker-url';
const sheetInput = document.getElementById('sheetUrl');
const messageBox = document.getElementById('message');
const statsBox = document.getElementById('stats');
const rowsBox = document.getElementById('rows');
const cloudInput = document.getElementById('cloudUrl');
const saveCloudBtn = document.getElementById('saveCloudBtn');

function showMessage(text, type = 'info') {
  messageBox.textContent = text;
  messageBox.className = `message ${type}`;
}

function normalizeSheetUrl(rawUrl) {
  const url = rawUrl.trim();
  if (!url) return '';
  if (url.includes('/export?')) return  if (url.includes('/export?')) return  if (url.includes('/export?')) return  if (url.includes('/exporco  if (url.incetId =  if (url.includes('/export?')) return  if (url.includes('/export?')) return  if (url.iatch[1] : '0';
  return `https://docs.google.com/spreadsheets/d/${spreadsheetId}/export?format=csv&gid=${  return `https://docs.google.com/spreadsheets/d/${spreadsheetId}/export?xt.trim().s  return `https://docs.ines.length) return r  return `https://docs.google.com/spreadsheets/d/${sps =  return `https://docs.google.com/spreadsheets/dlse;
                                                                                                   {
        if (inQuotes && line[i + 1] === '"') {
                                                                       in                                      else i                          es) {
                             rim());
        current = '';
      } else {
        cur   t += char;
      }
    }
       ues.push(current.       ues.push(current.       ues.push(current.       ues.push(current.       ues.push(current.       ues.push(current.       ues.push(current.       ues.push(current.       ues.push(current.       ues.push(current.       ues.push(current.       ues.pus{
      r      r      r      r      r      r      r      r      r      r      r      r      r      r      r      r      r      r      r      r      r      r      r      r      r      r      r      r      r      r      r      r      r      r      r      r      r      r      r      r      r      r      r      r      r      r      rrow.S      r      r      r      r      r      r      r      r      r      r      r      r      r
}

function renderStats(rows) {
  const total = rows.length;
  const done = rows.filter((row) => String(row.status).toLowerCase() === 'done').length;
  const progress = rows.filter((row) => String(row.status).toLowerCase() === 'in progress').length;
  statsBox.innerHTML = `
    <div class="stat"><div cl ss="label">To    <div class="stat"><div cl ss="label">To    <div class="stat"><div cl ss="label">To    <div class="stat"><div cl ss="label">To    <div class="stat"><div cl ss="label">To    <div class="stat"><div cl ss="label">To    <div class="stat"><div cl ss="label">To    <div class="sws(rows) {
  if (!rows.length) {
    rowsBox.innerHTML = '<tr><td colspan="4">No rows available yet.</td></tr>';
    return;
  }
  rowsBox.innerHTML = rows.map((row) => {
    const statusClass = String(row.status).toLowerCase().replace(/\s+/g, '-');
    return `
      <tr>
        <td>${row.day}</td>
        <td>${row.topic}</td>
        <td><span class="pill ${statusClass}">${row.status}</span></td>
        <td>${row.notes || 'â€        <td>${ro/tr>
    `;
                 
function useDemoData() {
  const rows = toDisplayRows(demoData);
  renderStats(rows);
  renderRows(rows);
  showMessage('Using demo data. Connect a Google Sheet or cloud database to sync across devices.', 'info');
}

async function loadFromSheet() {
  const value = sheetInput.value.trim();
  if (!value) {
    showMessage('Paste a Google Sheets share link first.', 'error');
    return;
  }

  const exportUrl = normalizeSheetUrl(value);
  try {
    const response = await fetch(exportUrl);
    if (!response.ok) throw new Error(`Request failed with ${re    if (!response.o   const csv = await response.text();
    const rows = toDisplayRows(parseCsv(csv));
    renderStats(rows);
    renderRows(rows);
    localSt    localSt    localSt    localSt    localSt    localSt    localSt    locaows from your Google Sheet.`,    localSt    } catch (error) {
    showMessage(`Could no    showMessage(`Could no    showMessage(`Could no    showMessagetion loadFromCloud() {
  const value = cloudInput.value.trim();
  if (!value) {
                       a clo                       a clo    ker.', 'error');
    return;
  }

  try {
    const response = await fetch(value);
    if (!response.ok) throw new Error(`Cloud fetch failed with ${response.sta    if (!response.ok) tad = await response.json();
    const rows = toDisp  yRows(Array.is    const rows = toDisp  yRows(Array.is    const rows = toDisp );
    renderStats(rows);
    renderRows(rows);
    localStorage.setItem('google-l3-cloud-url', value);
    showMessage('Loaded tracker rows from the cloud database.', 'success');
  } catch (error) {
    showMessage(`Could not load from cloud. ${error.message}`, 'error');
  }
}

saveCloudsaveCloudsatListener('click', loadFromCloud);
document.getElementById('loadBtn').addEventListener('click', loadFromSheet);
document.getElementById('demoBtn').addEventListener('click', useDemoData);

const savedUrl = localStorage.getItem(storageKey);
if (savedUrl) {
  sheetInput.value = savedUrl;
  loadFromSheet();
} else {
  const savedCloudUrl  const saveage.  const savedCloudUrl  const saveage.  const savedCloudUrl  const saveaglue = savedCloudUrl;
    loadF    loadF    loadF    loadF    loadFta();
  }
}
