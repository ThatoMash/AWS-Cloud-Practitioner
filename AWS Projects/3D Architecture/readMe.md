# Praesignis 3D E-Commerce Cloud Architecture Project

## Introduction
Welcome to the **Praesignis 3D E-Commerce Cloud Architecture Project**. In this project, **we** set out to create a new way of shopping online where customers can view and interact with high quality 3D product models instead of just static images. Because 3D files are larger and more complex, **we** built a cloud based system that is fast, secure, and able to scale to handle many users at once.

Through this project, **we** applied AWS cloud services to deliver a solution that is **reliable, scalable, secure, and cost efficient**. It also allowed **us** to demonstrate real world cloud practices while focusing on key principles like **availability, performance, and security**.

## Project Overview
**We** designed the platform so that users can explore products in 3D giving them a more immersive and interactive shopping experience. To make this possible, **we** deployed the system across multiple AWS Availability Zones ensuring that users worldwide experience fast load times and reliable performance.  

The architecture reflects **our focus** on balancing **speed, reliability, security, and cost** following best practices taught in the Praesignis Cloud Practitioner Programme.

## Our Team (Group 4)
- **Thato**  
- **Ndzalo**  
- **Aluwani**  
- **Xoliswa**  

## Architecture Diagram

<img width="600" height="498" alt="image" src="https://github.com/user-attachments/assets/284a7d91-3577-4206-84a2-02a5dc149577" />

 
*This diagram shows how the AWS services work together to support the platform.*

## How the Architecture Works
Here is how **we** designed the system to work  

1. **Amazon Route 53**: Directs users to the right endpoints and performs health checks to make sure everything is working  
2. **AWS WAF & AWS Shield**: Protect the platform from attacks and online threats  
3. **Amazon CloudFront**: Delivers 3D models and images quickly to users around the world  
4. **Amazon S3**: Stores the original 3D files and other media  
5. **Application Load Balancer (ALB)**: Sends requests to backend servers for processing  
6. **Amazon EC2 & Auto Scaling Group**: Handle heavy tasks like product data retrieval, user sessions, and order processing, scaling up when needed  
7. **Amazon RDS (Multi AZ)**: Keeps relational data safe and ensures high availability with automatic failover  
8. **Amazon CloudWatch**: Monitors system performance and health  
9. **AWS Trusted Advisor**: Gives recommendations for saving costs and improving performance and security  

## Meeting the Project Goals
- **High Availability**: **We** ensured this with Multi AZ deployment, EC2 Auto Scaling, and Route 53 health checks  
- **Scalability**: The system can handle increasing traffic thanks to CloudFront, S3, and Auto Scaling  
- **Performance**: CloudFront caching and balanced backend traffic keep everything running smoothly  
- **Security**: **We** implemented WAF, Shield, IAM policies, private subnets, and security groups  
- **Cost Efficiency**: **We** optimized costs using Auto Scaling, S3 storage, and Trusted Advisor insights  

## Design Decisions and Challenges
- **Why EC2 over Serverless?** EC2 provides consistent computing power for heavy 3D processing  
- **Why RDS over DynamoDB?** RDS is better for structured data and strong transactional consistency  
- **Multi AZ Deployment**: While more expensive, **we** chose it to guarantee reliability  
- **Optimizing 3D Assets**: **We** focused on this to maintain fast loading times and smooth user experiences  

## Team Contributions
- **Xoliswa**: Led the architectural layout and service distribution across Availability Zones  
- **Thato**: Documented the purpose and reasoning behind each AWS service  
- **Aluwani**: Contributed to the architecture structure and security design  
- **Ndzalo**: Analyzed alternative designs, trade offs, and challenges  

## Conclusion
Through this project, **we** built a cloud based system capable of delivering interactive 3D content to users worldwide. The platform is **resilient, secure, scalable**, and follows modern industry practices. Most importantly, it provides a **high quality, immersive shopping experience**, showing what a well designed cloud architecture can achieve  

**We hope this project inspires others to explore cloud solutions for complex, high performance applications**
