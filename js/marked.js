<script src="https://cdn.jsdelivr.net/npm/marked/marked.min.js"></script>

async function loadMarkdown(file) {
    const response = await fetch(file);

    const text = await response.text();

    document.getElementById("content").innerHTML =
        marked.parse(text);
}