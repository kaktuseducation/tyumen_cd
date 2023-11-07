const searchInput = document.getElementById('searchInput');
const searchResults = document.getElementById('searchResults');
 
searchInput.addEventListener('input', (e) =&gt; {
    const searchText = e.target.value;
 
    if (searchText.trim() === '') {
        searchResults.innerHTML = '';
        return;
    }
 
    fetch(`/search?q=${searchText}`)
        .then((response) =&gt; response.json())
        .then((results) =&gt; {
            searchResults.innerHTML = results.map((result) =&gt; `
                &lt;div&gt;
                    &lt;h3&gt;${result.title}&lt;/h3&gt;
                    &lt;p&gt;${result.description}&lt;/p&gt;
                &lt;/div&gt;
            `).join('');
        });
});
