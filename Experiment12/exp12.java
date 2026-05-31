package com.example.employeeapi.model; 
import jakarta.persistence.Entity; 
import jakarta.persistence.Id; 
 
@Entity 
public class Employee { 
 
    @Id 
    private int id; 
    private String name; 
    private String department; 
    private double salary; 
 
    public Employee() {} 
 
    public Employee(int id, String name, String department, double salary) { 
        this.id = id;
         this.name = name; 
        this.department = department; 
        this.salary = salary; 
    } 
 
    public int getId() { 
        return id; 
    } 
 
    public void setId(int id) { 
        this.id = id; 
    } 
 
    public String getName() { 
        return name; 
    } 
 
    public void setName(String name) { 
        this.name = name; 
    } 
 
    public String getDepartment() { 
        return department; 
    } 
 
    public void setDepartment(String department) { 
        this.department = department; 
    } 
 
    public double getSalary() { 
        return salary; 
    } 
 
     
public void setSalary(double salary) { 
        this.salary = salary; 
    } 
} 
 
Service Layer 
package com.example.employeeapi.service; 
 
import java.util.List; 
import org.springframework.beans.factory.annotation.Autowired; 
import org.springframework.stereotype.Service; 
import com.example.employeeapi.model.Employee; 
import com.example.employeeapi.repository.EmployeeRepository; 
 
@Service 
public class EmployeeService { 
 
    @Autowired 
    private EmployeeRepository repository; 
 
    public Employee saveEmployee(Employee employee) { 
        return repository.save(employee); 
    } 
 
    public List<Employee> getAllEmployees() { 
        return repository.findAll(); 
    } 
 
    public Employee getEmployeeById(int id) { 
        return repository.findById(id).orElse(null); 
    } 
 
    public void deleteEmployee(int id) { 
        repository.deleteById(id); 
    } 
} 
 
Controller Layer 
package com.example.employeeapi.controller; 
 
import java.util.List; 
import org.springframework.beans.factory.annotation.Autowired; 
import org.springframework.web.bind.annotation.*; 
 
import com.example.employeeapi.model.Employee; 
import com.example.employeeapi.service.EmployeeService; 
 
@RestController 
@RequestMapping("/employees") 
public class EmployeeController { 
 
    @Autowired 
    private EmployeeService service; 
 
    @PostMapping 
    public Employee addEmployee(@RequestBody Employee employee) { 
        return service.saveEmployee(employee); 
    } 
 
    @GetMapping 
    public List<Employee> getAllEmployees() { 
        return service.getAllEmployees(); 
    }
    @GetMapping("/{id}") 
    public Employee getEmployee(@PathVariable int id) { 
        return service.getEmployeeById(id); 
    } 
 
    @DeleteMapping("/{id}") 
    public void deleteEmployee(@PathVariable int id) { 
        service.deleteEmployee(id); 
    } 
}