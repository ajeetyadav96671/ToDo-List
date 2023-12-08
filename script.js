window.addEventListener('load', () => {
	const form = document.querySelector("#todo-form");
	const input = document.querySelector("#todo-input");
	const list_element = document.querySelector("#tasks");

	form.addEventListener('submit', (e) => {
		e.preventDefault();

		const task = input.value;

		const task_element = document.createElement('div');
		task_element.classList.add('task');

		const content_task_element = document.createElement('div');
		content_task_element.classList.add('content');

		task_element.appendChild(content_task_element);

		const input_task_element = document.createElement('input');
		input_task_element.classList.add('text');
		input_task_element.type = 'text';
		input_task_element.value = task;
		input_task_element.setAttribute('readonly', 'readonly');

		content_task_element.appendChild(input_task_element);

		const actions_task_element = document.createElement('div');
		actions_task_element.classList.add('actions');
		
		const edit_task_element = document.createElement('button');
		edit_task_element.classList.add('edit');
		edit_task_element.innerText = 'Edit';

		const delete_task_element = document.createElement('button');
		delete_task_element.classList.add('delete');
		delete_task_element.innerText = 'Delete';

		actions_task_element.appendChild(edit_task_element);
		actions_task_element.appendChild(delete_task_element);

		task_element.appendChild(actions_task_element);

		list_element.appendChild(task_element);

		input.value = '';

		edit_task_element.addEventListener('click', (e) => {
			if (edit_task_element.innerText.toLowerCase() == "edit") {
				edit_task_element.innerText = "Save";
				input_task_element.removeAttribute("readonly");
				input_task_element.focus();
			} else {
				edit_task_element.innerText = "Edit";
				input_task_element.setAttribute("readonly", "readonly");
			}
		});

		delete_task_element.addEventListener('click', (e) => {
			list_element.removeChild(task_element);
		});
	});
});