SELECT e.FirstName, e.LastName, r.Description, FORMAT(r.OpenDate, 'yyyy-MM-dd') FROM Employees AS e
INNER JOIN Reports AS r ON r.EmployeeId = e.Id
ORDER BY e.Id, r.OpenDate
