SELECT DepositGroup, IsDepositExpired, AVG(DepositInterest) AS [AverageInterest] FROM WizzardDeposits
WHERE YEAR(DepositStartDate) >= 1985
GROUP BY IsDepositExpired, DepositGroup
ORDER BY DepositGroup DESC, IsDepositExpired
