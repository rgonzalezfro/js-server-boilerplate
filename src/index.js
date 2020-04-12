import './index.css'

import { getUsers, deleteUser } from "./api/users";

getUsers().then(result =>{
    let usersBody = '';
    result.forEach(user => {
        usersBody += `<tr>
        <td>${user.id}</td>
        <td>${user.firstName}</td>
        <td>${user.lastName}</td>
        <td>${user.email}</td>
        <td><a href="#" data-id="${user.id}" class="delete-user">DELETE</a></td>
        </tr>`
    });
    document.getElementById('users').innerHTML = usersBody;

    const deleteLinks = document.getElementsByClassName('delete-user');

    Array.from(deleteLinks, link =>{
        link.onclick = (event)=>{
            event.preventDefault();
            const element = event.target;
            deleteUser(element.attributes['data-id'].value);
            element.parentNode.parentNode.remove();
        }
    });
})
