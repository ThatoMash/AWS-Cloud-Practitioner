# Praesignis 3D E-Commerce Cloud Architecture Project

## Group 4

### Participants
- Thato
- Ndzalo
- Aluwani
- Xoliswa

## Project Overview

The Praesignis 3D E Commerce Platform is designed to support a new style of online shopping where customers view and interact with high quality 3D product models. These files are much larger and more complex than traditional images, so the system needed to be built on a cloud architecture that provides global performance, low latency, strong security, and the ability to scale when user traffic increases. The architecture makes use of concepts taught in the Praesignis Cloud Practitioner Programme and reflects real industry practices. The design focuses on the main requirements of high availability, performance, scalability, security, and cost efficiency. To achieve this level of reliability, the platform is deployed across multiple AWS Availability Zones.


<img width="600" height="498" alt="image" src="https://github.com/user-attachments/assets/2d27bf72-ec0a-4c10-9597-e9b34c99b155" />


## Architecture 

User traffic begins at Amazon Route 53. This service handles DNS routing and performs health checks to ensure users are always directed to working endpoints. Traffic then moves through AWS WAF and AWS Shield, which protect the platform from common attacks and denial of service attempts. Static assets such as 3D models, product textures, and images are delivered through Amazon CloudFront.

CloudFront stores cached content at AWS edge locations across the world, allowing users to experience faster loading times. The original files are stored in Amazon S3. When a request requires backend processing, the Application Load Balancer forwards the request to EC2 instances distributed across two Availability Zones. These instances handle activities such as retrieving product data, managing customer sessions, and processing orders. 

The compute layer is managed through an Auto Scaling Group. Relational data is stored in Amazon RDS configured in Multi AZ mode, allowing immediate failover if the primary instance becomes unavailable. System performance and activity are monitored through Amazon CloudWatch, while AWS Trusted Advisor provides recommendations on cost, security, and performance.

## Meeting the Project Requirements

The platform achieves high availability through Multi AZ RDS deployment, Auto Scaling for EC2 instances, and Route 53 health checks. Scalability is supported through S3 storage, CloudFront global delivery, and EC2 Auto Scaling. Performance is improved through CloudFront caching and balanced backend traffic. Security is maintained through layered protection involving WAF, Shield, IAM, private subnets, and security groups. Cost optimization is supported through Auto Scaling, S3 storage, and Trusted Advisor insights.

## Design Trade Offs and Challenges

EC2 instances were selected instead of serverless computing because the application performs heavy 3D processing tasks that require consistent compute power. Amazon RDS was chosen over DynamoDB due to the need for structured relational data and strong transactional consistency. Multi AZ deployment increases cost but ensures reliability. The architecture also depends on optimized 3D assets to maintain fast user experiences.

## Team Contributions

- **Xoliswa**: Led the architectural layout and distribution of services across Availability Zones.
- **Thato**: Documented the purpose and reasoning behind each AWS service.
- **Aluwani**: Contributed to the architecture structure and security design.
- **Ndzalo**: Analyzed alternative designs, trade offs, and challenges.

## Conclusion

The Praesignis 3D E Commerce Architecture Project demonstrates a complete cloud based solution capable of delivering interactive 3D content to users around the world. The architecture is resilient, secure, scalable, and aligned with modern industry practices.
