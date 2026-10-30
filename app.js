'use strict';
const tabs = [...document.querySelectorAll('[data-day]')];
const panels = [...document.querySelectorAll('.day-panel')];
function selectDay(day, focus = false) {
  if (!tabs.some(tab => tab.dataset.day === day)) return;
  tabs.forEach(tab => {
    const selected = tab.dataset.day === day;
    tab.setAttribute('aria-selected', String(selected));
    tab.tabIndex = selected ? 0 : -1;
    if (selected && focus) tab.focus();
  });
  panels.forEach(panel => { panel.hidden = panel.id !== day; });
}
document.querySelector('.day-tabs').hidden = false;
panels.forEach(panel => {
  panel.setAttribute('role', 'tabpanel');
  panel.setAttribute('aria-labelledby', `tab-${panel.id}`);
  panel.tabIndex = 0;
});
const jstDate = new Intl.DateTimeFormat('en-CA', { timeZone: 'Asia/Tokyo', year:'numeric', month:'2-digit', day:'2-digit' }).format(new Date());
const defaultDay = {'2026-10-30':'friday','2026-10-31':'saturday','2026-11-01':'sunday'}[jstDate] || 'friday';
selectDay(location.hash.slice(1) || defaultDay);
if (!tabs.some(t => t.dataset.day === location.hash.slice(1))) selectDay(defaultDay);
tabs.forEach((tab, index) => {
  tab.addEventListener('click', () => selectDay(tab.dataset.day));
  tab.addEventListener('keydown', event => {
    let next;
    if (event.key === 'ArrowRight') next = (index + 1) % tabs.length;
    if (event.key === 'ArrowLeft') next = (index + tabs.length - 1) % tabs.length;
    if (event.key === 'Home') next = 0;
    if (event.key === 'End') next = tabs.length - 1;
    if (next !== undefined) { event.preventDefault(); selectDay(tabs[next].dataset.day, true); }
  });
});
document.querySelector('#sunday-shortcut').addEventListener('click', () => selectDay('sunday'));
addEventListener('hashchange', () => selectDay(location.hash.slice(1)));

const packingInputs = [...document.querySelectorAll('[data-pack]')];
const storageKey = 'nikko-autumn-2026-packing-v1';
let packed = {};
try { const saved = JSON.parse(localStorage.getItem(storageKey) || '{}'); if (saved && typeof saved === 'object' && !Array.isArray(saved)) packed = saved; }
catch { document.querySelector('#save-note').textContent = 'Browser storage is unavailable. Ticks work for this visit but may not be saved.'; }
function updatePacking() {
  const count = packingInputs.filter(input => input.checked).length;
  document.querySelector('#packing-count').textContent = `${count} / ${packingInputs.length} packed`;
  document.querySelector('#packing-progress').style.width = `${count / packingInputs.length * 100}%`;
}
packingInputs.forEach(input => {
  input.checked = packed[input.dataset.pack] === true;
  input.addEventListener('change', () => {
    packed[input.dataset.pack] = input.checked;
    try { localStorage.setItem(storageKey, JSON.stringify(packed)); }
    catch { document.querySelector('#save-note').textContent = 'Could not save ticks in this browser. Keep this page open or use Print / save PDF.'; }
    updatePacking();
  });
});
updatePacking();
document.querySelector('#copy-stop').addEventListener('click', async () => {
  const status = document.querySelector('#copy-status');
  try { await navigator.clipboard.writeText('中禅寺郵便局 — Chuzenji Yubinkyoku (Stop 29)'); status.textContent = 'Copied — ready to paste.'; }
  catch { status.textContent = 'Copy is unavailable here. Press and hold the Japanese name above to select it.'; }
});
document.querySelector('#print-guide').addEventListener('click', () => window.print());
if ('IntersectionObserver' in window) {
  const observer = new IntersectionObserver(entries => {
    for (const entry of entries) if (entry.isIntersecting) {
      document.querySelectorAll('.trip-nav a').forEach(link => link.classList.toggle('active', link.hash === `#${entry.target.id}`));
    }
  }, { rootMargin: '-10% 0px -65% 0px' });
  ['itinerary','transport','packing','places'].forEach(id => observer.observe(document.getElementById(id)));
}
const offlineStatus = document.querySelector('#offline-status');
async function refreshOfflineStatus() {
  try {
    const cache = await caches.open('nikko-guide-v2');
    const ready = Boolean(await cache.match('offline-ready'));
    offlineStatus.textContent = ready
      ? 'Guide saved for offline reading on this browser. Maps, weather updates and external links still need internet. Browsers can clear saved data.'
      : 'Offline copy is not ready yet. Keep this page open online, or use Print / save PDF. External links need internet.';
  } catch { offlineStatus.textContent = 'Offline saving is unavailable in this browser. Use Print / save PDF before travelling.'; }
}
if ('serviceWorker' in navigator && window.isSecureContext) {
  navigator.serviceWorker.addEventListener('message', event => { if (event.data === 'OFFLINE_READY') refreshOfflineStatus(); });
  navigator.serviceWorker.register('sw.js').then(registration => {
    const worker = registration.installing;
    if (worker) worker.addEventListener('statechange', () => { if (worker.state === 'activated') refreshOfflineStatus(); });
    refreshOfflineStatus();
  }).catch(() => { offlineStatus.textContent = 'Offline saving could not finish. Use Print / save PDF as a backup.'; });
} else { offlineStatus.textContent = 'Offline saving is unavailable here. Use Print / save PDF before travelling.'; }
