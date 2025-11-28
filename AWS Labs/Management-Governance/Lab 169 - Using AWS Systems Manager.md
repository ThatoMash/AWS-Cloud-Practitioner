# AWS Systems Manager Lab - Demonstration

## Introduction

This repository demonstrates my hands-on work with **AWS Systems Manager**, a service that allows centralized management, automation, and secure access to AWS resources. The purpose of this lab was to:  

- Collect inventory from EC2 instances without SSH  
- Install and configure applications remotely  
- Manage application settings dynamically using Parameter Store  
- Access instances securely via Session Manager  

These tasks highlight practical skills in **Compute Services**, **Management & Governance**, and **Security & Compliance** on AWS.  

---

## Task 1: Inventory of Managed Instances

**Overview:**  
Used **Fleet Manager** to collect operating system, application, and metadata from a managed EC2 instance.  

**Outcome:**  
- Inventory successfully created and associated with the instance.  
- Able to review all installed applications and configuration settings remotely.  

**Screenshot Placeholder:**  
![Fleet Manager Inventory](path/to/fleet_manager_inventory.png)

---

## Task 2: Install Custom Web Application

**Overview:**  
Used **Run Command** to remotely install the **Widget Manufacturing Dashboard** application on an EC2 instance.  

**Outcome:**  
- Apache, PHP, AWS SDK, and the dashboard installed automatically.  
- Verified application running via public IP.  

**Screenshot Placeholder:**  
![Dashboard Installed](path/to/dashboard_installed.png)

---

## Task 3: Manage Application Settings via Parameter Store

**Overview:**  
Created a parameter `/dashboard/show-beta-features` to enable beta features in the dashboard.  

**Outcome:**  
- Beta charts appeared when the parameter was set to `True`.  
- Verified live configuration updates in the running application.  

**Screenshot Placeholder:**  
![Parameter Store Feature](path/to/parameter_store_feature.png)

---

## Task 4: Access Instances with Session Manager

**Overview:**  
Used **Session Manager** to securely access the EC2 instance without SSH.  

**Outcome:**  
- Listed application files and EC2 metadata.  
- Verified secure, auditable access to instances with IAM control.  

**Screenshot Placeholder:**  
![Session Manager Access](path/to/session_manager_access.png)

---

## Conclusion

This lab demonstrates how AWS Systems Manager enables **efficient, secure, and automated management of AWS resources**. Key takeaways include:  

- Performing inventory and configuration checks without manual SSH connections  
- Automating application installation across instances  
- Managing dynamic application settings via Parameter Store  
- Securely accessing instances using Session Manager with proper auditing  

These exercises reinforce skills in **Compute Services**, **Management & Governance**, and **Security & Compliance**, providing practical experience with real-world AWS management tasks.
