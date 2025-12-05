# Praesignis 3D E-Commerce Cloud Architecture Project

## Introduction
Welcome to the **Praesignis 3D E-Commerce Cloud Architecture Project**! This project explores a new way of shopping online where customers can view and interact with high-quality 3D product models instead of just static images. Because 3D files are larger and more complex, we built a cloud-based system that is fast, secure, and can scale to handle lots of users at the same time.

This project applies AWS cloud services to deliver a solution that is not only **reliable and scalable**, but also **cost-efficient and secure**. It demonstrates real-world cloud practices while highlighting key principles like availability, performance, and security.

## Project Overview
The platform allows users to explore products in 3D, giving them a more immersive shopping experience. To make this possible, the system is deployed across multiple AWS Availability Zones, ensuring that users around the world get fast load times and consistent performance.  

With this architecture, we aimed to strike a balance between **speed, reliability, security, and cost**, following best practices taught in the Praesignis Cloud Practitioner Programme.

## Our Team (Group 4)
- **Thato**  
- **Ndzalo**  
- **Aluwani**  
- **Xoliswa**  

## Architecture Diagram

<img width="600" height="498" alt="image" src="https://github.com/user-attachments/assets/cbcdb28a-ef9c-4794-afab-6d3671411208" />
 
*Visual representation of how AWS services work together to support the platform.*

## How the Architecture Works
Here’s a quick walkthrough of the platform:  

1. **Amazon Route 53**: Directs users to the right endpoints and checks that everything is working.  
2. **AWS WAF & AWS Shield**: Protects the platform from attacks and online threats.  
3. **Amazon CloudFront**: Delivers 3D models and images quickly to users around the world.  
4. **Amazon S3**: Stores the original 3D files and other media.  
5. **Application Load Balancer (ALB)**: Sends requests to backend servers for processing.  
6. **Amazon EC2 & Auto Scaling Group**: Handles heavy tasks like product data retrieval, user sessions, and orders, scaling up when needed.  
7. **Amazon RDS (Multi-AZ)**: Keeps relational data safe and ensures high availability with automatic failover.  
8. **Amazon CloudWatch**: Keeps an eye on system performance and health.  
9. **AWS Trusted Advisor**: Gives recommendations for saving costs and improving performance and security.  

## Meeting the Project Goals
- **High Availability**: Multi-AZ deployment, EC2 Auto Scaling, and Route 53 health checks keep the platform running.  
- **Scalability**: Handles increasing traffic with CloudFront, S3, and Auto Scaling.  
- **Performance**: CloudFront caching and load balancing make everything faster.  
- **Security**: WAF, Shield, IAM policies, private subnets, and security groups protect the system.  
- **Cost Efficiency**: Optimized through Auto Scaling, S3 storage, and Trusted Advisor insights.  

## Design Decisions and Challenges
- **Why EC2 over Serverless?** EC2 provides consistent computing power for heavy 3D processing.  
- **Why RDS over DynamoDB?** RDS is perfect for structured data and ensures strong consistency.  
- **Multi-AZ Deployment**: More expensive, but worth it for reliability.  
- **Optimizing 3D Assets**: Essential for smooth and fast user experiences.  

## Who Did What
- **Xoliswa**: Designed the architectural layout and service distribution.  
- **Thato**: Documented the purpose of each AWS service.  
- **Aluwani**: Contributed to architecture structure and security design.  
- **Ndzalo**: Researched alternative designs and trade-offs.  

## Conclusion
The **Praesignis 3D E-Commerce Cloud Architecture Project** shows how a cloud-based system can deliver interactive 3D content to users worldwide. It’s **reliable, secure, scalable**, and follows modern industry practices, offering a high-quality, immersive shopping experience.  

We hope this project inspires others to explore cloud solutions for complex, high-performance applications.

