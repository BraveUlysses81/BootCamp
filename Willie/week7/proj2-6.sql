SELECT e.first_name, e.last_name FROM employees e WHERE e.department_id = 60;

SELECT e.first_name,
  e.last_name,
  e.email,
  d.department_name,
  l.city
FROM employees e
JOIN departments d
ON (e.department_id = d.department_id)
JOIN locations l
ON (d.location_id = l.location_id)
WHERE d.department_name = 'Executive';

SELECT e.first_name,
  e.last_name,
  e.email,
  b.first_name AS MANAGER,
  d.department_name,
  l.city
FROM employees e
JOIN employees b
ON (e.manager_id = b.employee_id)
JOIN departments d
ON (e.department_id = d.department_id)
JOIN locations l
ON (d.location_id       = l.location_id)
WHERE d.department_name = 'Executive';

SELECT e.first_name,
  e.last_name,
  e.email,
  b.first_name AS MANAGER,
  d.department_name,
  l.city,
  e.salary * (1 + NVL(e.commission_pct,0)) AS COMPENSATION
FROM employees e
JOIN employees b
ON (e.manager_id = b.employee_id)
JOIN departments d
ON (e.department_id = d.department_id)
JOIN locations l
ON (d.location_id       = l.location_id)
WHERE d.department_name = 'Executive';

SELECT e.first_name,
  e.last_name,
  e.email,
  d.department_name,
  e.salary * (1 + NVL(e.commission_pct,0)) AS COMPENSATION
FROM employees e
LEFT JOIN departments d
ON (e.department_id = d.department_id)
LEFT JOIN locations l
ON (d.location_id = l.location_id)
ORDER BY COMPENSATION;