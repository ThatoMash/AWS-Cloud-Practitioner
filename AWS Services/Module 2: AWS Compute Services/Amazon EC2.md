# AWS EC2 Compute Services 01)

This document contains study notes and visual aids regarding Amazon Elastic Compute Cloud (EC2), based on materials for the AWS Certified Cloud Practitioner exam.

---

## Introduction to EC2

Amazon Elastic Compute Cloud (EC2) provides resizable compute capacity in the cloud.
It is essentially a highly configurable virtual server that underlies many other AWS services. 
Launching an instance involves selecting an OS (via AMI), choosing an instance type, adding storage, and configuring settings like security groups.

![Introduction to EC2](image_3.png)

<img width="1920" height="1080" alt="#1 Introduction to EC2" src="https://github.com/user-attachments/assets/bed0ac53-7b57-4508-b08a-4555aa2c100c" />


## EC2 Instance Types and Families

An EC2 "Instance Type" is a combination of the **Instance Family** and the **Instance Size**.

### Instance Families

Instance families are designed to handle different workload requirements by offering varying combinations of CPU, Memory, Storage, and Networking capacity.

They are categorized generally into:
* **General Purpose (e.g., T2, M5):** Balance of resources. Good for web servers.
* **Compute Optimized (e.g., C5):** High-performance processors. Good for scientific modeling, gaming servers.
* **Memory Optimized (e.g., R5, X1):** Fast performance for large datasets in memory. Good for databases and caches.
* **Accelerated Optimized (e.g., P3, G4):** Hardware accelerators (GPUs). Good for machine learning.
* **Storage Optimized (e.g., I3, D2):** High I/O for local storage. Good for NoSQL databases and data warehousing.

<img width="1920" height="1080" alt="#2 EC2 Instance Families" src="https://github.com/user-attachments/assets/59d5a964-6b33-4ae9-9f6c-6380a44376b0" />

### Instance Types & Sizes

A common naming pattern is used for sizes (e.g., nano, micro, small, medium, large, xlarge). While there are exceptions, generally,
as you move up in size, key attributes and price double.


<img width="1920" height="1080" alt="#3 EC2 Instance Types 1 " src="https://github.com/user-attachments/assets/62027ef7-24f0-4595-abb1-cfe659feba62" />


)
<img width="1920" height="1080" alt="#4 EC2 Instance Types 2 " src="https://github.com/user-attachments/assets/3059d14f-3e85-47c4-a185-e3fdb751286a" />

---

## EC2 Pricing Models

There are five primary ways to pay for EC2 instances, ranging from flexible, low-commitment options to long-term options with significant savings.


<img width="1920" height="1080" alt="#7 EC2 Pricing Models" src="https://github.com/user-attachments/assets/f2691915-b8ae-4d9b-bffa-b690988f5fcf" />


### 1. On-Demand

This is the default Pay-As-You-Go (PAYG) model.
* **Commitment:** None. Least commitment.
* **Billing:** Per second (minimum 60s) for Linux/Windows, or per hour for others.
* **Use Case:** Short-term, spiky, or unpredictable workloads. First-time apps.

<img width="1920" height="1080" alt="#8 On Demand" src="https://github.com/user-attachments/assets/939a8f92-ae1c-42eb-be17-3c5274996e02" />


### 2. Reserved Instances (RI)

Designed for steady-state, predictable usage. By committing to a contract, you receive significant discounts compared to On-Demand.

* **Term:** 1 or 3-year contract.
* **Payment Options:** All Upfront (greatest savings), Partial Upfront, or No Upfront.
* **Classes:**
    * *Standard:* Up to 75% off, less flexible.
    * *Convertible:* Up to 54% off, allows exchanging RI attributes if greater or equal value.
* **Features:** Can be shared between multiple accounts in an AWS Organization. Unused RIs can be sold on the marketplace.


<img width="1920" height="1080" alt="#9 Reserved 1" src="https://github.com/user-attachments/assets/6532a4fc-4f59-4d3d-8bf7-b22ac495cbaa" />


Below is an example of the interface used to purchase and filter Reserved Instances based on tenancy, term, and payment option.


<img width="1920" height="1080" alt="#10 Reserved 2" src="https://github.com/user-attachments/assets/88e839b2-0d16-43d9-ad4c-08d50deb9863" />


### Other Models
* **Spot:** Request spare capacity for up to 90% savings. Can be interrupted. Suitable for stateless, non-critical workloads.
* **Dedicated:** The most expensive option, guaranteeing isolated hardware.
* **AWS Savings Plan:** A flexible pricing model that offers low prices compared to On-Demand,
*  in exchange for a commitment to a specific usage amount (measured in $/hour) for a one or three-year period.

---

## EC2 Tenancy

Tenancy defines how your EC2 instance is placed on underlying physical hardware.

There are three levels:
1.  **Default:** Your instance runs on shared hardware. The physical host may change upon reboot.
2.  **Dedicated Instance:** Your instance always runs on hardware dedicated to a single customer.
3.  **Dedicated Host:** You have control over the physical server itself.


<img width="1920" height="1080" alt="#6 EC2 Tenancy" src="https://github.com/user-attachments/assets/18abdadb-c1b2-42ac-b8a3-6f3784075a0f" />


### Dedicated Hosts Deep Dive

Dedicated Hosts provide physical server isolation. They are often required for regulatory compliance or licensing scenarios where you need to bring your own license (BYOL) based on sockets, cores, or host ID.


<img width="1920" height="1080" alt="#5 Dedicated Hosts vs Dedicated Instances" src="https://github.com/user-attachments/assets/1b451f13-d9cc-47eb-aa5f-682251b8e2fa" />

## Reserved Instances (RI) Deep Dive

Reserved Instances require a commitment to a specific configuration in exchange for a discount. The price and terms are defined by specific attributes and scope.

### RI Attributes
The price of a Reserved Instance is determined by four key attributes:
1.  **Instance Type:** The combination of instance family (e.g., m4) and size (e.g., large).
2.  **Region:** The specific region where the RI is purchased.
3.  **Tenancy:** Whether it runs on shared (default) or single-tenant (dedicated) hardware.
4.  **Platform:** The operating system (e.g., Windows or Linux/Unix).



<img width="1920" height="1080" alt="#11 RI Limits" src="https://github.com/user-attachments/assets/c239190f-c23b-4e97-b911-07b8c6ebc9b4" />


### Regional vs. Zonal Scope
When purchasing an RI, you select a scope. This choice does **not** affect the price.

* **Regional RI:**
    * Applies to usage in *any* Availability Zone (AZ) in the Region.
    * **Does not** reserve capacity.
    * Allows instance size flexibility (for Linux/Unix with default tenancy).
* **Zonal RI:**
    * Applies to a *specific* Availability Zone.
    * **Reserves capacity** in that zone.
    * No instance size flexibility.



<img width="1920" height="1080" alt="#12 Regional and Zonal RI" src="https://github.com/user-attachments/assets/d6a98e6e-76ce-4688-83f2-4e6f6b744467" />


### RI Limits
There are limits on how many RIs you can purchase per month:
* **20 Regional** Reserved Instances per Region.
* **20 Zonal** Reserved Instances per Availability Zone.

*Note: Purchasing Zonal RIs allows you to exceed your running On-Demand Instance limit (default 20).*



<img width="1920" height="1080" alt="#13 RI Limits" src="https://github.com/user-attachments/assets/965542d7-a03e-4cbd-b14a-2f3f0b6952d6" />
<img width="1920" height="1080" alt="#14 Capacity Reservations" src="https://github.com/user-attachments/assets/be234c06-1f85-4d1b-b7d7-2319135e5e32" />


### Standard vs. Convertible RIs
There are key differences in flexibility between the two offering classes.

| Feature | Standard RI | Convertible RI |
| :--- | :--- | :--- |
| **Modification** | Can change AZ, Scope, Network, and Size (Linux only). | Cannot be modified; must be exchanged. |
| **Exchange** | Cannot be exchanged. | Can be exchanged for new attributes (Family, Type, Platform, Scope, Tenancy). |
| **Marketplace** | **Can be bought or sold.** | Cannot be bought or sold. |



<img width="1920" height="1080" alt="#15 Standard vs Convertible RI" src="https://github.com/user-attachments/assets/05b3cdb8-736a-4022-bded-38a6ba054c89" />

### RI Marketplace
The RI Marketplace allows you to sell unused **Standard RIs** to recoup costs.
* **Requirements:** You must have a US bank account.
* **Timing:** RI must be active for at least 30 days, and the term is rounded down to the nearest month.
* **Listing:** You set the upfront price; other configurations remain the same as the original purchase.
* **Limit:** You can sell up to $20,000 in RIs per year.


<img width="1920" height="1080" alt="#11 RI Limits" src="https://github.com/user-attachments/assets/04b198e8-edff-42f9-954d-63ad54945362" />

---

## Spot Instances
Spot Instances utilize unused AWS compute capacity for up to **90% discounts** compared to On-Demand prices.

* **Best for:** Flexible workloads, stateless apps, batch processing, or CI/CD jobs.
* **Interruption:** AWS can terminate these instances at any time if capacity is needed elsewhere.
* **Termination Billing Rules:**
    * If **AWS** terminates the instance, you are **not charged** for the partial hour.
    * If **you** terminate the instance, you **are charged** for any hour it ran.

<img width="1920" height="1080" alt="#17 Spot" src="https://github.com/user-attachments/assets/1699762e-abe3-4abc-bce5-2a9c2bbfb3e0" />

---

## Dedicated Instances
Dedicated Instances run on hardware dedicated to a single customer (Single Tenant), ensuring physical isolation from other customers.

* **Use Case:** Strict server-bound licensing or security compliance requirements.
* **Comparison:** Unlike Dedicated Hosts (where you control the physical server), Dedicated Instances are just isolated at the hardware level but managed by AWS.
* **Availability:** Offered for On-Demand, Reserved (up to 60% savings), and Spot (up to 90% savings).


<img width="1920" height="1080" alt="#18 Dedicated" src="https://github.com/user-attachments/assets/1188f412-073c-47ad-b4d4-d5aa3b3252cc" />

---

## AWS Savings Plans
Savings Plans offer discounts similar to RIs but with a simplified purchasing process based on monetary commitment (e.g., $0.10/hour) rather than specific instance configurations.

* **Terms:** 1 Year or 3 Years.
* **Payment Options:** All Upfront, Partial Upfront, No Upfront.

![AWS Savings Plan Purchasing](%2319%20Savings%20Plan%201.jpg)

### Savings Plan Types
There are three main types of savings plans:

1.  **Compute Savings Plans:**
    * **Most flexible.** Up to 66% savings.
    * Applies automatically to EC2, Fargate, and Lambda usage regardless of family, region, or OS.
2.  **EC2 Instance Savings Plans:**
    * **Lowest prices.** Up to 72% savings.
    * Commit to a specific instance family in a specific region (e.g., M5 in N. Virginia).
3.  **SageMaker Savings Plans:**
    * Up to 64% savings.
    * Applies to SageMaker usage regardless of instance family or region.

<img width="1920" height="1080" alt="#19 Savings Plan 1" src="https://github.com/user-attachments/assets/4a371d5e-5773-4a84-aba9-e99830933f58" />


<img width="1920" height="1080" alt="#20 Savings Plan 2" src="https://github.com/user-attachments/assets/f0814886-5a6f-4745-b419-64ba8e8839eb" />

