USE hr;

SELECT * FROM employees;

SELECT MAX(salary) FROM employees;

SELECT MAX(salary) - MIN(salary) FROM employees;

SELECT job_id, AVG(salary) AS media_salarial
FROM employees
GROUP BY job_id
ORDER BY media_salarial DESC;

SELECT SUM(salary) AS despesa_salarial FROM employees;

SELECT
	ROUND(MAX(salary), 2) AS salario_maximo,
    ROUND(MIN(salary), 2) AS salario_minimo,
    ROUND(SUM(salary), 2) AS folha_pagamento,
    ROUND(AVG(salary), 2) AS salario_medio
FROM employees;

SELECT
	job_id,
    count(*)
FROM employees
GROUP BY job_id
HAVING job_id = 'IT_PROG';

SELECT
	job_id,
    SUM(salary) AS custo_setorial
FROM employees
GROUP BY job_id
ORDER BY custo_setorial DESC;

SELECT
	job_id,
    SUM(salary) AS folha_pagamento
FROM employees
GROUP BY job_id
HAVING job_id = 'IT_PROG';

SELECT
	job_id,
	AVG(salary) AS media_salarial
FROM employees
GROUP BY job_id
HAVING job_id <> 'IT_PROG'
ORDER BY media_salarial DESC;

SELECT
	department_id,
	AVG(salary) AS media_salarial,
    COUNT(*) AS n_funcionarios
FROM employees
GROUP BY department_id
HAVING n_funcionarios > 10;

SELECT * FROM employees;

SET SQL_SAFE_UPDATES = 0;

UPDATE employees
SET phone_number = REPLACE(phone_number, 515, 777)
WHERE LEFT(phone_number, 3) = 515;

SELECT * FROM employees
WHERE LENGTH(first_name) >= 8;

SELECT
	employee_id,
    first_name,
    YEAR(hire_date)
FROM employees;

SELECT
	employee_id,
    first_name,
    DAY(hire_date)
FROM employees;

SELECT
	employee_id,
    first_name,
    MONTH(hire_date)
FROM employees;

SELECT UCASE(CONCAT(first_name, ' ', last_name)) FROM employees;

SELECT
	last_name,
    hire_date
FROM employees
WHERE hire_date LIKE '1987-07%';

SELECT
	first_name,
    last_name,
    DATEDIFF(NOW(), hire_date) AS dias_na_empresa
FROM employees;