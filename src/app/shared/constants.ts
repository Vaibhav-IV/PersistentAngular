const host = "http://localhost:8080"

export const urls = {
    loginUrl: {
        login: `${host}/login`
    },
    courseUrls: {
        add: `${host}/AddCourse`,
        getAll: `${host}/courses`,
        getById: `${host}/courses/`
    },
    userUrls: {
        add: `${host}/addUser`,
        getAll: `${host}/getAllUser`,
    },
    dashboardUrls: {
        dashboard: `${host}/dashboard`
    }

}