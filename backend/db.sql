-- بسم الله الرحمن الرحيم
CREATE TYPE e_doing_done AS ENUM('All', 'Completed', 'Uncompleted');
CREATE TABLE app_tasks (
    id serial PRIMARY KEY NOT NULL,
    description character varying(255) NOT NULL,
    doing e_doing_done
);

