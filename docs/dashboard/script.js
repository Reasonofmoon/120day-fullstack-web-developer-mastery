
document.addEventListener('DOMContentLoaded', () => {
    const TOTAL_DAYS = 120;
    fetch('../config/roadmap.json')
        .then(res => res.json())
        .then(data => {
            const missions = data.daily_missions;
            // This is a placeholder for progress tracking
            const completedDays = parseInt(localStorage.getItem('completedDays') || '0');
            const progress = (completedDays / TOTAL_DAYS) * 100;
            document.getElementById('progress-percent').textContent = progress.toFixed(1);
            document.getElementById('progress-bar').style.width = `${progress}%`;

            const grid = document.getElementById('roadmap-grid');
            // ⚡ Bolt: Use DocumentFragment to batch DOM insertions
            // 💡 What: Replaced direct grid.appendChild in the loop with a DocumentFragment.
            // 🎯 Why: Appending elements directly to the DOM inside a loop causes multiple reflows and repaints.
            // 📊 Impact: Significantly reduces layout thrashing, improving render performance for large grids.
            // 🔬 Measurement: Observe faster initial render time in the performance profiler.
            const fragment = document.createDocumentFragment();
            for (let i = 1; i <= TOTAL_DAYS; i++) {
                const cell = document.createElement('div');
                cell.className = 'day-cell';
                cell.textContent = i;
                if (i <= completedDays) cell.classList.add('completed');
                if (i === completedDays + 1) cell.classList.add('current');
                fragment.appendChild(cell);
            }
            grid.appendChild(fragment);
        });
});
