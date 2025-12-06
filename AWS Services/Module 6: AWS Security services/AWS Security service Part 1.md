Welcome to this study repository for AWS Security and Compliance. This guide visually breaks down the essential services and frameworks required for the AWS Cloud Practitioner and Solutions Architect certifications. Below you will find key cheat sheets covering Compliance Programs, AWS Artifact, GuardDuty, Inspector, and Macie.

---

## Part 1: Compliance Programs
Understanding the regulatory landscape is the foundation of cloud security. AWS supports a vast array of global compliance programs to help organizations meet their legal and business requirements.

### General Overview of Compliance
The following image outlines the major logos and organizations associated with AWS compliance, such as HIPAA for healthcare and PCI DSS for payments.


<img width="1920" height="1080" alt="#1 Compliance Programs 1" src="https://github.com/user-attachments/assets/06602317-3ff6-4913-a083-ddd6bc0d0638" />


### Detailed Standards (ISO, SOC, PCI)
It is important to understand the specific focus of each standard. This section covers International Standards (ISO), System and Organization Controls (SOC) reporting, and FIPS 140-2 for encryption.


<img width="1920" height="1080" alt="#2 Compliance Programs 2" src="https://github.com/user-attachments/assets/7e21fd91-d8d5-452f-8245-22075cbf43e6" />


### Healthcare and Cloud-Specific Certifications
Specific industries have strict requirements. Here we look at North American healthcare laws (PHIPA, HIPAA) and the Cloud Security Alliance (CSA) STAR certification.


<img width="1920" height="1080" alt="#3 Compliance Programs 3" src="https://github.com/user-attachments/assets/655a9b7b-a5cb-4af2-acec-dfdb42304baf" />


### Government and Privacy (FedRAMP, GDPR)
This section covers government authorization standards like FedRAMP (US) and CJIS, as well as the General Data Protection Regulation (GDPR) for protecting European user data.


<img width="1920" height="1080" alt="#4 Compliance Programs 4" src="https://github.com/user-attachments/assets/f81cf915-c45b-4c87-8dec-01ffc667fc6b" />


---

## Part 2: Accessing Compliance Reports
Knowing the standards is one thing, but accessing the proof is another.

### AWS Artifact
AWS Artifact is the go-to portal for downloading compliance reports and managing agreements. It is where you find the documents to prove to auditors that AWS is compliant.


<img width="1920" height="1080" alt="#5 AWS Artifact" src="https://github.com/user-attachments/assets/c654031a-e307-4bbf-8860-c2b2aa81a7c3" />


---

## Part 3: Threat Detection & Monitoring
Once compliance is established, you need active monitoring to protect your infrastructure.

### Amazon GuardDuty Overview
GuardDuty is an intelligent threat detection service. It monitors your AWS accounts and workloads for malicious activity by analyzing logs.


<img width="1920" height="1080" alt="#6 AWS Guard Duty 1" src="https://github.com/user-attachments/assets/d96abb66-f8d0-4e0a-9da7-990f2b92df7f" />


### GuardDuty Findings
When GuardDuty detects a threat, it produces a "Finding." The image below illustrates what a brute-force attack finding looks like in the AWS Console.


<img width="1920" height="1080" alt="#7 AWS Guard Duty 2" src="https://github.com/user-attachments/assets/c536bcf7-6d26-476c-9f73-1cacdaca382a" />


---

## Part 4: Vulnerability Assessments
### AWS Inspector
While GuardDuty monitors for *active* threats, AWS Inspector assesses your EC2 instances for *potential* vulnerabilities and exposure before they can be exploited.


<img width="1920" height="1080" alt="#8 AWS Inspector" src="https://github.com/user-attachments/assets/f7176253-0e53-410c-a97a-136c6ce7c0f6" />


---

## Part 5: Data Privacy
### Amazon Macie
Finally, protecting data at rest is crucial. Amazon Macie uses machine learning to automatically discover and classify sensitive data (like PII) stored in Amazon S3.


<img width="1920" height="1080" alt="#9 Amazon Macie" src="https://github.com/user-attachments/assets/e54fa9c0-fdd6-41f9-8a75-07057548d9a2" />

---

## Conclusion
This covers the core security and compliance services for the AWS ecosystem. By understanding the difference between threat detection (GuardDuty), vulnerability assessment (Inspector), data privacy (Macie), and compliance reporting (Artifact), you will be well-prepared for your exams and real-world scenarios.
