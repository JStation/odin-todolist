const Storage = () => {
    const saveProjects = (projects) => {
        localStorage.setItem('projects', JSON.stringify(projects));
    }

    const getProjects = () => {
        // TODO: rebuild by reinstantiating objects
        const projects = localStorage.getItem('projects');
    }
}

export default Storage;