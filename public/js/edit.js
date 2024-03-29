const editFormHandler = async (event) => {
    event.preventDefault();

    const id = window.location.toString().split('/')[
        window.location.toString().split('/').length - 1
    ];
    const postTitle = document.querySelector('input[name="post-title"]').value;
    const postText = document.querySelector('textarea[name="post-text:]').value;

    const response = await fetch(`/api/posts/${id}`, {
        method: 'PUT',
        body: JSON.stringify({
            postTitle,
            postText
        }),
        headers: {
            'Content-Type': 'application/json'
        }
    });
    if (response.ok) {
        document.location.replace('/dashboard');
    } else {
        alert(response.statusText);
    }
};

document.querySelector('.edit-post-form').addEventListener('submit', editFormHandler);