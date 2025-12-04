# AWS EC2 Hands-On Lab

## Overview
This lab demonstrates practical experience with **Amazon EC2 (Elastic Compute Cloud)**, a core AWS service that provides scalable computing capacity in the cloud. During this lab, I worked through the process of **launching, configuring, securing, monitoring, and scaling EC2 instances**, gaining a clear understanding of how cloud infrastructure behaves in real-world scenarios.

By completing this lab, I not only deployed a working web server but also explored **security, automation, and instance lifecycle management**, which are critical for building reliable and resilient cloud applications.

---

## Lab Architecture
The lab involved deploying a **web server** on EC2 with proper security and scalability:

<img width="423" height="341" alt="image" src="https://github.com/user-attachments/assets/7b8873d0-ab3b-4976-9c02-b6e1ba4868ac" />


---

## Lab Tasks

### 1️⃣ Launch EC2 Instance
I began by launching an EC2 instance named `Web Server` using the **Amazon Linux 2023 AMI**. I selected a **t3.micro instance type** and configured **termination protection** to prevent accidental deletion. Using a **User Data script**, I automated the installation of an Apache web server and deployed a simple web page.

**Screenshot Placeholder**  
![EC2 Launch Instance Placeholder](./images/launch-instance.png)

<img width="1363" height="471" alt="image" src="https://github.com/user-attachments/assets/62cee78a-bb84-40f8-8d69-37d7609d2e5f" />
<img width="1348" height="513" alt="image" src="https://github.com/user-attachments/assets/b5d73f36-b553-4206-92df-9a476ec69dac" />
<img width="1353" height="494" alt="image" src="https://github.com/user-attachments/assets/bcbfd31b-c719-4559-881e-d1fc01015381" />
<img width="1360" height="561" alt="image" src="https://github.com/user-attachments/assets/d4fbed6e-4cce-42b1-92fc-fd2bf4e9e64b" />
<img width="1365" height="533" alt="image" src="https://github.com/user-attachments/assets/82ef7105-3c76-494e-a250-d2b1e7e1c97f" />


---

### 2️⃣ Monitor the Instance
Once the instance was running, I explored monitoring options. I checked **system and instance reachability** via Status Checks, reviewed **CloudWatch metrics** for performance insights, and captured an **instance screenshot** to simulate console access.

**Screenshot Placeholder**  
<img width="1359" height="175" alt="image" src="https://github.com/user-attachments/assets/6020b9b9-de08-4927-a53c-f55dcb36bbaf" />
<img width="1358" height="461" alt="image" src="https://github.com/user-attachments/assets/6686fcfa-cede-4ede-8362-74461be73501" />
<img width="1360" height="554" alt="image" src="https://github.com/user-attachments/assets/3c70dbde-d236-45e7-80ec-40e1d71bfe0f" />
<img width="1359" height="413" alt="image" src="https://github.com/user-attachments/assets/03a6a38b-2411-453e-ae86-7498146034ff" />
<img width="1360" height="327" alt="image" src="https://github.com/user-attachments/assets/fe8d2a21-ef9f-445f-b44e-588ccf43b156" />
<img width="528" height="416" alt="image" src="https://github.com/user-attachments/assets/2cb2c629-a5c7-4781-8eac-1b980ab0c61c" />


---

### 3️⃣ Configure Security and Access the Web Server
Initially, my instance was not accessible through a browser because the security group blocked HTTP traffic. I modified the security group to allow inbound traffic on port 80 and successfully accessed the web server, confirming that the **automation script** had deployed the webpage correctly:

<img width="1365" height="449" alt="image" src="https://github.com/user-attachments/assets/77ece935-3b5d-40ff-bb3d-22f4235a3314" />
<img width="632" height="470" alt="image" src="https://github.com/user-attachments/assets/d6549915-8dc7-4fd6-8a64-139f460f4415" />
<img width="1365" height="214" alt="image" src="https://github.com/user-attachments/assets/042b7059-86f0-4b5b-a96f-1198f4ca391e" />
<img width="1365" height="412" alt="image" src="https://github.com/user-attachments/assets/d1a57f2a-4c8b-4d67-9411-454cf69d7951" />
<img width="1356" height="361" alt="image" src="https://github.com/user-attachments/assets/734dfbbc-a754-472d-abb2-34643cb50dc5" />
<img width="1365" height="215" alt="image" src="https://github.com/user-attachments/assets/f7e048e5-ac6b-4b3f-896d-296f040c9ceb" />



---

### 4️⃣ Resize the Instance
As part of understanding scalability, I stopped the instance and resized it from a **t3.micro → t3.small**, effectively doubling its memory. I also increased the **root EBS volume** from 8 GiB to 10 GiB, then restarted the instance. This step illustrated how EC2 instances can be dynamically scaled to match changing workloads.

**Screenshot Placeholder**  
<img width="1360" height="211" alt="image" src="https://github.com/user-attachments/assets/5881d5b9-3665-46a3-a957-0c326a90588d" />
<img width="1364" height="467" alt="image" src="https://github.com/user-attachments/assets/2a505635-875c-429a-9e22-02c2177d9d6c" />
<img width="1365" height="533" alt="image" src="https://github.com/user-attachments/assets/381f5025-acd2-4190-96cf-410fc187a2c8" />
<img width="1360" height="570" alt="image" src="https://github.com/user-attachments/assets/2de50c67-1b2c-4c9e-aadb-c60e88700d9f" />
<img width="1010" height="575" alt="image" src="https://github.com/user-attachments/assets/f30a840f-534e-4ae4-bed1-cf83fe02ed53" />
<img width="1164" height="172" alt="image" src="https://github.com/user-attachments/assets/65d9e7ea-e277-41a5-9d9b-1016e18ffc1a" />






---

### 5️⃣ Test Termination Protection
I tested termination protection by attempting to terminate the instance, which was initially blocked. After disabling the protection, I successfully terminated the instance. This task highlighted the importance of **safeguards in managing production environments**.

**Screenshot Placeholder**  
![EC2 Termination Placeholder](./images/termination.png)

---

## What I Learned
Through this lab, I gained **hands-on experience with EC2 from start to finish**. I learned how to:

- Deploy and secure a web server using automation  
- Use security groups to control network traffic effectively  
- Monitor instance health and performance using CloudWatch  
- Scale compute and storage resources dynamically  
- Implement safeguards like termination protection to prevent accidental loss  

Overall, this experience deepened my understanding of **cloud infrastructure management** and gave me practical insight into building **resilient and scalable applications on AWS**.

---

## Additional Resources
- [AWS EC2 Getting Started Guide](https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/EC2_GetStarted.html)  
- [EC2 Instance Types](https://aws.amazon.com/ec2/instance-types/)  
- [Amazon Machine Images (AMI)](https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/AMIs.html)  
- [Security Groups](https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/ec2-security-groups.html)  
- [EC2 Resizing](https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/ec2-instance-resize.html)  
- [Termination Protection](https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/using-termination-protection.html)  

---

### Notes
- Replace picture placeholders in `/images` with actual screenshots.  
- This project demonstrates **real-world AWS EC2 proficiency**, making it ideal for cloud, DevOps, and backend-focused roles.







