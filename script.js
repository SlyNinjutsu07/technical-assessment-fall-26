function showView(viewName){
    document.querySelectorAll('.view').forEach(view => {
        view.style.display = 'none';
    });

    document.getElementById(viewName).style.display = 'block';
}

showView('home');