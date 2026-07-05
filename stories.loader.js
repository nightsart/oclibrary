// stories.html specific loader
async function loadContent(page) {
    const container = document.getElementById('content-container');
    if (!container) {
        console.warn('loadContent: #content-container not found');
        return;
    }
    let content = '';

    switch (page) {
        case 'cheater':
            try {
                const res = await fetch('stories/cheater.txt');
                if (!res.ok) throw new Error(`${res.status} ${res.statusText}`);
                const text = await res.text();
                content = `<div class="header-container">
                    <h2>Cheater</h2>
                    <div class="character-images">
                        <img src="images/icons/amy.webp" alt="Amy" class="character-image" title="Amy">
                        <img src="images/icons/kyra.webp" alt="Kyra" class="character-image" title="Kyra">
                    </div>
                </div>
                <pre class="story-text">${escapeHtml(text)}</pre>`;
            } catch (err) {
                content = `<h2>Error</h2><p>Could not load cheater.txt: ${escapeHtml(err.message)}</p>`;
            }
            break;
        case 'nmAmy':
            try {
                const res = await fetch('stories/nm amy.txt');
                if (!res.ok) throw new Error(`${res.status} ${res.statusText}`);
                const text = await res.text();
                content = `<div class="header-container">
                    <h2>Nightmare:</br>Amy</h2>
                    <div class="character-images">
                        <img src="images/icons/amy.webp" alt="Amy" class="character-image" title="Amy">
                    </div>
                </div>
                <pre class="story-text">${escapeHtml(text)}</pre>`;
            } catch (err) {
                content = `<h2>Error</h2><p>Could not load nm amy.txt: ${escapeHtml(err.message)}</p>`;
            }
            break;
        case 'gone':
            try {
                const res = await fetch('stories/gone.txt');
                if (!res.ok) throw new Error(`${res.status} ${res.statusText}`);
                const text = await res.text();
                content = `<div class="header-container">
                    <h2>Gone</h2>
                    <div class="character-images">
                        <img src="images/icons/nyx.webp" alt="Nyx" class="character-image" title="Nyx">
                    </div>
                </div>
                <pre class="story-text">${escapeHtml(text)}</pre>`;
            } catch (err) {
                content = `<h2>Error</h2><p>Could not load gone.txt: ${escapeHtml(err.message)}</p>`;
            }
            break;
        case 'gun':
            try {
                const res = await fetch('stories/gun.txt');
                if (!res.ok) throw new Error(`${res.status} ${res.statusText}`);
                const text = await res.text();
                content = `<div class="header-container">
                    <h2>Gun</h2>
                    <div class="character-images">
                        <img src="images/icons/amy.webp" alt="Amy" class="character-image" title="Amy">
                        <img src="images/icons/kyra.webp" alt="Kyra" class="character-image" title="Kyra">
                    </div>
                </div>
                <pre class="story-text">${escapeHtml(text)}</pre>`;
            } catch (err) {
                content = `<h2>Error</h2><p>Could not load gun.txt: ${escapeHtml(err.message)}</p>`;
            }
            break;
        case 'mistakes':
            try {
                const res = await fetch('stories/mistakes.txt');
                if (!res.ok) throw new Error(`${res.status} ${res.statusText}`);
                const text = await res.text();
                content = `<div class="header-container">
                    <h2>Mistakes</h2>
                    <div class="character-images">
                        <img src="images/icons/amy.webp" alt="Amy" class="character-image" title="Amy">
                        <img src="images/icons/cara.webp" alt="Cara" class="character-image" title="Cara">
                        <img src="images/icons/aaron.webp" alt="Aaron" class="character-image" title="Aaron">
                    </div>
                </div>
                <pre class="story-text">${escapeHtml(text)}</pre>`;
            } catch (err) {
                content = `<h2>Error</h2><p>Could not load mistakes.txt: ${escapeHtml(err.message)}</p>`;
            }
            break;
        case 'food':
            try {
                const res = await fetch('stories/food.txt');
                if (!res.ok) throw new Error(`${res.status} ${res.statusText}`);
                const text = await res.text();
                content = `<div class="header-container">
                    <h2>Food</h2>
                    <div class="character-images">
                        <img src="images/icons/naiya.webp" alt="Naiya" class="character-image" title="Naiya">
                        <img src="images/icons/penny.webp" alt="Penny" class="character-image" title="Penny">
                        <img src="images/icons/amy.webp" alt="Amy" class="character-image" title="Amy">
                    </div>
                </div>
                <pre class="story-text">${escapeHtml(text)}</pre>`;
            } catch (err) {
                content = `<h2>Error</h2><p>Could not load food.txt: ${escapeHtml(err.message)}</p>`;
            }
            break;
        case 'cry':
            try {
                const res = await fetch('stories/cry.txt');
                if (!res.ok) throw new Error(`${res.status} ${res.statusText}`);
                const text = await res.text();
                content = `<div class="header-container">
                    <h2>Cry</h2>
                    <div class="character-images">
                        <img src="images/icons/ember.webp" alt="Ember" class="character-image" title="Ember">
                    </div>
                </div>
                <pre class="story-text">${escapeHtml(text)}</pre>`;
            } catch (err) {
                content = `<h2>Error</h2><p>Could not load cry.txt: ${escapeHtml(err.message)}</p>`;
            }
            break;
        case 'end':
            try {
                const res = await fetch('stories/end.txt');
                if (!res.ok) throw new Error(`${res.status} ${res.statusText}`);
                const text = await res.text();
                content = `<div class="header-container">
                    <h2>End</h2>
                    <div class="character-images">
                        <img src="images/icons/gwen.webp" alt="Gwen" class="character-image" title="Gwen">
                        <img src="images/icons/kishi.webp" alt="Kishi" class="character-image" title="Kishi">
                    </div>
                </div>
                <pre class="story-text">${escapeHtml(text)}</pre>`;
            } catch (err) {
                content = `<h2>Error</h2><p>Could not load end.txt: ${escapeHtml(err.message)}</p>`;
            }
            break;
        case 'herDay':
            try {
                const res = await fetch('stories/her day.txt');
                if (!res.ok) throw new Error(`${res.status} ${res.statusText}`);
                const text = await res.text();
                content = `<div class="header-container">
                    <h2>Her Day</h2>
                </div>
                <pre class="story-text">${escapeHtml(text)}</pre>`;
            } catch (err) {
                content = `<h2>Error</h2><p>Could not load her day.txt: ${escapeHtml(err.message)}</p>`;
            }
            break;
        case 'evening':
            try {
                const res = await fetch('stories/evening.txt');
                if (!res.ok) throw new Error(`${res.status} ${res.statusText}`);
                const text = await res.text();
                content = `<div class="header-container">
                    <h2>Evening</h2>
                    <div class="character-images">
                        <img src="images/icons/fc25.webp" alt="FC25" class="character-image" title="FC25">
                        <img src="images/icons/gwen.webp" alt="Gwen" class="character-image" title="Gwen">
                        <img src="images/icons/tyler.webp" alt="Tyler" class="character-image" title="Tyler">
                    </div>
                </div>
                <pre class="story-text">${escapeHtml(text)}</pre>`;
            } catch (err) {
                content = `<h2>Error</h2><p>Could not load evening.txt: ${escapeHtml(err.message)}</p>`;
            }
            break;
        case 'aftermath':
            try {
                const res = await fetch('stories/aftermath.txt');
                if (!res.ok) throw new Error(`${res.status} ${res.statusText}`);
                const text = await res.text();
                content = `<div class="header-container">
                    <h2>Aftermath</h2>
                    <div class="character-images">
                        <img src="images/icons/fc25.webp" alt="FC25" class="character-image" title="FC25">
                    </div>
                </div>
                <pre class="story-text">${escapeHtml(text)}</pre>`;
            } catch (err) {
                content = `<h2>Error</h2><p>Could not load aftermath.txt: ${escapeHtml(err.message)}</p>`;
            }
            break;
        case 'live':
            try {
                const res = await fetch('stories/live.txt');
                if (!res.ok) throw new Error(`${res.status} ${res.statusText}`);
                const text = await res.text();
                content = `<div class="header-container">
                    <h2>Live</h2>
                    <div class="character-images">
                        <img src="images/icons/lisy.webp" alt="Lisy" class="character-image" title="Lisy">
                        <img src="images/icons/moon.webp" alt="Moon" class="character-image" title="Moon">
                    </div>
                </div>
                <pre class="story-text">${escapeHtml(text)}</pre>`;
            } catch (err) {
                content = `<h2>Error</h2><p>Could not load live.txt: ${escapeHtml(err.message)}</p>`;
            }
            break;
        case 'control':
            try {
                const res = await fetch('stories/control.txt');
                if (!res.ok) throw new Error(`${res.status} ${res.statusText}`);
                const text = await res.text();
                content = `<div class="header-container">
                    <h2>Control</h2>
                    <div class="character-images">
                        <img src="images/icons/lisy.webp" alt="Lisy" class="character-image" title="Lisy">
                        <img src="images/icons/moon.webp" alt="Moon" class="character-image" title="Moon">
                    </div>
                </div>
                <pre class="story-text">${escapeHtml(text)}</pre>`;
            } catch (err) {
                content = `<h2>Error</h2><p>Could not load control.txt: ${escapeHtml(err.message)}</p>`;
            }
            break;
        case 'alone':
            try {
                const res = await fetch('stories/alone.txt');
                if (!res.ok) throw new Error(`${res.status} ${res.statusText}`);
                const text = await res.text();
                content = `<div class="header-container">
                    <h2>✦ alone</h2>
                    <div class="character-images">
                        <img src="images/icons/night.webp" alt="Night" class="character-image" title="Night">
                        <img src="images/icons/mist.webp" alt="Mist" class="character-image" title="Mist">
                    </div>
                </div>
                <pre class="story-text">${escapeHtml(text)}</pre>`;
            } catch (err) {
                content = `<h2>Error</h2><p>Could not load alone.txt: ${escapeHtml(err.message)}</p>`;
            }
            break;
        case 'eyes':
            try {
                const res = await fetch('stories/eyes.txt');
                if (!res.ok) throw new Error(`${res.status} ${res.statusText}`);
                const text = await res.text();
                content = `<div class="header-container">
                    <h2>✦ eyes</h2>
                    <div class="character-images">
                        <img src="images/icons/mist.webp" alt="Mist" class="character-image" title="Mist">
                    </div>
                </div>
                <pre class="story-text">${escapeHtml(text)}</pre>`;
            } catch (err) {
                content = `<h2>Error</h2><p>Could not load eyes.txt: ${escapeHtml(err.message)}</p>`;
            }
            break;
        case 'pulse':
            try {
                const res = await fetch('stories/pulse.txt');
                if (!res.ok) throw new Error(`${res.status} ${res.statusText}`);
                const text = await res.text();
                content = `<div class="header-container">
                    <h2>✿ pulse</h2>
                    <img src="images/icons/kiara.webp" alt="Kiara" class="character-image" title="Kiara">
                </div>
                <pre class="story-text">${escapeHtml(text)}</pre>`;
            } catch (err) {
                content = `<h2>Error</h2><p>Could not load pulse.txt: ${escapeHtml(err.message)}</p>`;
            }
            break;
        case 'nmStuck':
            try {
                const res = await fetch('stories/nm stuck.txt');
                if (!res.ok) throw new Error(`${res.status} ${res.statusText}`);
                const text = await res.text();
                content = `<div class="header-container">
                    <h2>Nightmare:</br>Stuck</h2>
                </div>
                <pre class="story-text">${escapeHtml(text)}</pre>`;
            } catch (err) {
                content = `<h2>Error</h2><p>Could not load nm stuck.txt: ${escapeHtml(err.message)}</p>`;
            }
            break;
        case 'nmNap':
            try {
                const res = await fetch('stories/nm nap.txt');
                if (!res.ok) throw new Error(`${res.status} ${res.statusText}`);
                const text = await res.text();
                content = `<div class="header-container">
                    <h2>Nightmare:</br>Nap</h2>
                </div>
                <pre class="story-text">${escapeHtml(text)}</pre>`;
            } catch (err) {
                content = `<h2>Error</h2><p>Could not load nm nap.txt: ${escapeHtml(err.message)}</p>`;
            }
            break;
        case 'home':
            content = `<div class="story-text" style="text-align: center;">
                    <h3>Content Warning</h3>
                    <p style="line-height: 0.8;">
                        </br>The great majority of these stories contain mature and disturbing content.
                        </br>They are entirely fictional and in no way are an endorsement of harmful behavior.
                        </br>Reader discretion is advised.
                    </p>
                    <p>
                        </br>Page created in October 2025, last added: Control & Live (Jan 9 2026)!
                    </p>
                </div>`;
            break;
        default:
            content = '<h2>404 Not Found</h2>';
    }

    container.innerHTML = content;
}
