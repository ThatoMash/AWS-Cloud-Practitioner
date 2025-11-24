# AWS Identity and Access Management (IAM): Users, Groups, and Policies

![AWS](https://img.shields.io/badge/AWS-IAM-orange?style=for-the-badge&logo=amazon-aws)
![Security](https://img.shields.io/badge/Security-Access_Control-red?style=for-the-badge&logo=security)
![Status](https://img.shields.io/badge/Status-Completed-success?style=for-the-badge)

---

## 📋 Project Overview
This lab demonstrates AWS IAM concepts including users, groups, policies, and secure access controls. Each screenshot below highlights a key step of the lab, along with a brief explanation.

---

## 🔹 Task 1: Password Policy Configuration

### IAM Dashboard
<img width="1347" height="564" alt="image" src="https://github.com/user-attachments/assets/eeb19d6f-eab2-4052-a062-ab3633b5326b" />
  
*This is the AWS IAM dashboard from where we navigate to configure password policies.*

### Default Password Policy
<img width="1351" height="570" alt="image" src="https://github.com/user-attachments/assets/309d432b-7832-421e-9528-2ab6c3b67812" />
  
*Shows the current account password policy before customization.*

### Custom Password Policy
<img width="1361" height="563" alt="image" src="https://github.com/user-attachments/assets/bb9adcc8-c536-495e-9c3e-c43610c4002c" />

*Configured password policy: minimum 10 characters, uppercase, lowercase, numbers, symbols, 90-day expiration.*

<img width="1350" height="560" alt="image" src="https://github.com/user-attachments/assets/43b2786a-32f2-4321-a8aa-30ace15bd1f3" />

<img width="1068" height="379" alt="image" src="https://github.com/user-attachments/assets/469f45bb-8fdb-4ad5-9686-4f7c316c5550" />


---

## 🔹 Task 2: Users and Groups

### IAM Users List
<img width="1346" height="566" alt="image" src="https://github.com/user-attachments/assets/20349328-bf30-4dae-8205-957f92ea2f4d" />
  
*Displays pre-created IAM users: user-1, user-2, user-3.*

### User-1 Summary
![User-1 Summary](screenshots/09-user1-summary.png)  
*Shows user-1 details with no permissions yet assigned.*

### S3-Support Group
![S3-Support Group](screenshots/18-s3-support-group.png)  
*User group created for S3 read-only access. Users inherit permissions through group membership.*

---

## 🔹 Task 3: Adding Users to Groups

### Add User-1 to S3-Support
![Add User-1 to Group](screenshots/27-user1-added-s3.png)  
*Confirmed that user-1 is now a member of the S3-Support group.*

### Add User-2 to EC2-Support
![Add User-2 to Group](screenshots/29-user2-added-success.png)  
*User-2 added to EC2-Support group, inheriting read-only EC2 permissions.*

### Add User-3 to EC2-Admin
![Add User-3 to Group](screenshots/31-user3-added-success.png)  
*User-3 added to EC2-Admin group for full EC2 administrative access.*

---

## 🔹 Task 4: Testing Permissions

### User-1 S3 Access
![User-1 S3 Access](screenshots/38-user1-s3-access.png)  
*User-1 can view and list S3 buckets, read-only access working as intended.*

### User-1 EC2 Access Denied
![User-1 EC2 Denied](screenshots/40-user1-ec2-denied.png)  
*User-1 cannot access EC2 instances — principle of least privilege verified.*

### User-3 EC2 Admin Actions
![User-3 Stop EC2](screenshots/51-user3-stop-instance.png)  
*User-3 stops an EC2 instance successfully, demonstrating admin permissions.*

---

## 📝 Notes / Key Learnings

- IAM **groups** simplify permission management.  
- **Managed policies** provide reusable permission sets; **inline policies** are custom per group.  
- **Least privilege principle** ensures users can only access resources they need.  
- Password policies and access testing improve **security and compliance**.  

---

 

---

## 👨‍💻 Author
**[Your Name]**  
GitHub: [@yourusername](https://github.com/yourusername)  
LinkedIn: [Your LinkedIn Profile](https://linkedin.com/in/yourprofile)

