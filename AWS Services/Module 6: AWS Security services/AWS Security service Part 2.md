# AWS Network Security: DDoS Protection and WAF

## Introduction
Securing web applications requires a multi-layered approach. 
This guide covers the essential AWS services designed to protect your infrastructure from Distributed Denial of Service (DDoS) attacks and common web exploits.
The following notes detail the differences between AWS Shield tiers and how AWS WAF complements them.

---

## Understanding the Threat: DDoS
Before diving into the solutions, it is important to understand the problem.
A **Distributed Denial of Service (DDoS)** attack is a malicious attempt to disrupt normal traffic by flooding a target website with a large amount of fake traffic.
This flood often comes from multiple sources, making it difficult to block simply by filtering a single IP address.


<img width="1920" height="1080" alt="#2 DDos" src="https://github.com/user-attachments/assets/59290b71-dd91-47a5-9263-93fa07f8f751" />


---

## The Solution: AWS Shield
To combat these attacks, AWS provides **AWS Shield**, a managed DDoS protection service that safeguards applications running on AWS. 
It is specifically designed to protect against Layer 3 (Network), Layer 4 (Transport), and Layer 7 (Application) attacks.

As shown below, when you route traffic through services like Amazon Route 53 or CloudFront, you are effectively utilizing AWS Shield protections.


<img width="1920" height="1080" alt="#3 AWS Shield 1" src="https://github.com/user-attachments/assets/a3a86560-ff59-4eea-8cf9-96c1f787b120" />


---

## Shield Standard vs. Shield Advanced
AWS Shield is available in two tiers: Standard and Advanced.

* **Shield Standard**: This is **free** and automatically available on all AWS services.
* It provides protection against the most common DDoS attacks and helps you build a resilient architecture.
* **Shield Advanced**: This is a paid service (approx. $3000 USD/year) designed for larger and more sophisticated attacks.
*  It offers additional features such as 24/7 access to the DDoS Response Team, cost protection for scaling charges during an attack, and advanced reporting.


<img width="1920" height="1080" alt="#4 AWS Shield 2" src="https://github.com/user-attachments/assets/a90d4578-c76b-4983-b65e-6a030d95f97e" />

---

## Application Layer Security: AWS WAF
While Shield focuses on DDoS, the **AWS Web Application Firewall (WAF)** protects your applications from common web exploits.

You can write your own rules to **ALLOW** or **DENY** traffic based on the content of HTTP requests.
WAF is critical for protecting against the **OWASP Top 10** most dangerous attacks, such as SQL Injection and Cross-Site Scripting (XSS). 
It can be attached to CloudFront, Application Load Balancers, or API Gateways.



<img width="1920" height="1080" alt="#1 AWS WAF" src="https://github.com/user-attachments/assets/891c832f-8163-422b-a76a-2d19d022b997" />


---

## Conclusion
By combining **AWS Shield** (for volumetric DDoS protection) with **AWS WAF** (for application-layer filtering), you create a robust defense for your cloud architecture. Shield Standard provides a baseline of safety for free, while Shield Advanced and WAF allow for granular control and enterprise-level support.
