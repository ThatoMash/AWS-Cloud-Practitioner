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
![IAM Dashboard](screenshots/01-iam-dashboard.png)  
*This is the AWS IAM dashboard from where we navigate to configure password policies.*

### Default Password Policy
![Default Password Policy](screenshots/02-default-password-policy.png)  
*Shows the current account password policy before customization.*

### Custom Password Policy
![Custom Password Policy](screenshots/04-password-policy-config.png)  
*Configured password policy: minimum 10 characters, uppercase, lowercase, numbers, symbols, 90-day expiration.*

---

## 🔹 Task 2: Users and Groups

### IAM Users List
![Users List](screenshots/08-iam-users-list.png)  
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

