
const employees = [
    {
        "id": 1,
        "firstName": "Aarav",
        "email": "employee1@example.com",
        "password": "123",
        "taskNumbers": {
            "active": 1,
            "newTask": 1,
            "completed": 1,
            "failed": 1
        },
        "tasks": [
            {
                "taskTitle": "Design a new logo",
                "taskDescription": "Create a modern logo for the company's rebranding.",
                "taskDate": "2025-01-10",
                "category": "Design",
                "active": true,
                "newTask": true,
                "completed": false,
                "failed": false
            },
            {
                "taskTitle": "Fix login issue",
                "taskDescription": "Resolve the bug in the login system.",
                "taskDate": "2025-01-12",
                "category": "Development",
                "active": false,
                "newTask": false,
                "completed": true,
                "failed": false
            },
            {
                "taskTitle": "Team meeting",
                "taskDescription": "Attend the weekly team sync meeting.",
                "taskDate": "2025-01-08",
                "category": "Management",
                "active": false,
                "newTask": false,
                "completed": false,
                "failed": true
            }
        ]
    },
    {
        "id": 2,
        "firstName": "Vihaan",
        "email": "a@a.com",
        "password": "123",
        "taskNumbers": {
            "active": 1,
            "newTask": 5,
            "completed": 0,
            "failed": 0
        },
        "tasks": [
            {
                "taskTitle": "Update project documentation",
                "taskDescription": "Revise and update the user manual for the project.",
                "taskDate": "2025-01-11",
                "category": "Documentation",
                "active": true,
                "newTask": true,
                "completed": false,
                "failed": false
            },
            {
                "taskTitle": "Review pull requests",
                "taskDescription": "Check and approve PRs from the development team.",
                "taskDate": "2025-01-13",
                "category": "Development",
                "active": true,
                "newTask": false,
                "completed": false,
                "failed": false
            }
        ]
    },
    {
        "id": 3,
        "firstName": "Aditya",
        "email": "employee3@example.com",
        "password": "123",
        "taskNumbers": {
            "active": 1,
            "newTask": 1,
            "completed": 1,
            "failed": 0
        },
        "tasks": [
            {
                "taskTitle": "Prepare presentation",
                "taskDescription": "Create slides for the upcoming client presentation.",
                "taskDate": "2025-01-09",
                "category": "Design",
                "active": false,
                "newTask": true,
                "completed": true,
                "failed": false
            },
            {
                "taskTitle": "Test new feature",
                "taskDescription": "Perform QA on the new feature before release.",
                "taskDate": "2025-01-14",
                "category": "Quality Assurance",
                "active": true,
                "newTask": false,
                "completed": false,
                "failed": false
            }
        ]
    },
    {
        "id": 4,
        "firstName": "Ishaan",
        "email": "employee4@example.com",
        "password": "123",
        "taskNumbers": {
            "active": 1,
            "newTask": 1,
            "completed": 1,
            "failed": 0
        },
        "tasks": [
            {
                "taskTitle": "Conduct training session",
                "taskDescription": "Provide training on the new software tool.",
                "taskDate": "2025-01-15",
                "category": "Training",
                "active": true,
                "newTask": true,
                "completed": false,
                "failed": false
            },
            {
                "taskTitle": "Write blog post",
                "taskDescription": "Publish a technical blog on the company website.",
                "taskDate": "2025-01-18",
                "category": "Marketing",
                "active": false,
                "newTask": false,
                "completed": true,
                "failed": false
            }
        ]
    },
    {
        "id": 5,
        "firstName": "Kabir",
        "email": "employee5@example.com",
        "password": "123",
        "taskNumbers": {
            "active": 1,
            "newTask": 1,
            "completed": 0,
            "failed": 1
        },
        "tasks": [
            {
                "taskTitle": "Plan team outing",
                "taskDescription": "Organize a fun outing for the team.",
                "taskDate": "2025-01-20",
                "category": "Management",
                "active": true,
                "newTask": true,
                "completed": false,
                "failed": false
            },
            {
                "taskTitle": "Optimize website",
                "taskDescription": "Improve website performance and reduce loading time.",
                "taskDate": "2025-01-22",
                "category": "Development",
                "active": false,
                "newTask": false,
                "completed": false,
                "failed": true
            }
        ]
    }
];

const admin = {
    "id": 1,
    "email": "admin@example.com",
    "password": "123"
};

export const setLocalStorage = () => {
    localStorage.setItem('employees', JSON.stringify(employees));
    localStorage.setItem('admin', JSON.stringify(admin));
};

export const getLocalStorage = () => {
    const employees = JSON.parse(localStorage.getItem('employees'));
    const admin = JSON.parse(localStorage.getItem('admin'));
    return { employees, admin };
};
