# AWS Computing Services - Study Notes 

This document contains study notes and visual aids regarding AWS Computing Services, including EC2, Containers, Serverless, and Edge Computing.


---

## 1. Computing Services Overview
**Elastic Compute Cloud (EC2)** is the backbone of AWS, allowing you to launch highly configurable virtual machines (Instances).
* **Virtual Machine (VM):** Emulation of a physical computer. You can create, copy, resize, or migrate them easily.
* **AMI (Amazon Machine Image):** A predefined configuration (OS, etc.) used to launch an instance.


<img width="1920" height="1080" alt="#1 EC2 Overview" src="https://github.com/user-attachments/assets/e1165ce1-b104-49e7-b895-ddddf0bcaa5a" />


---

## 2. VMs, Containers, and Serverless
AWS offers various levels of abstraction for computing.

### Virtual Machines
* **Amazon LightSail:** A managed virtual server service. User-friendly, great for simple workloads like WordPress without needing deep AWS knowledge.

### Containers
Containers virtualize the OS to run multiple workloads (microservices) on a single instance.
* **Elastic Container Service (ECS):** Container orchestration service that supports Docker.
* **Elastic Container Registry (ECR):** Repository for storing and versioning container images.
* **ECS Fargate:** Serverless container orchestration. You pay per running container, and AWS manages the underlying server.
* **Elastic Kubernetes Service (EKS):** Fully managed Kubernetes (K8s) service for orchestrating microservices.

### Serverless
* **AWS Lambda:** Run code without provisioning servers. You upload code, set memory/duration, and pay only for the compute time used (rounded to the nearest 100ms).


<img width="1920" height="1080" alt="#2 VMs, Containers and Serverless" src="https://github.com/user-attachments/assets/f540f66d-0fce-4e55-acd7-e6eddf9011e3" />

---

## 3. High Performance Computing (HPC)
Tools for boosting computing capacity and performance.

* **The Nitro System:** Uses dedicated hardware and a lightweight hypervisor for faster innovation and enhanced security.
* **Bare Metal Instances:** EC2 instances (like M5, R5) with no hypervisor, giving workloads direct access to hardware.
* **Bottlerocket:** Linux-based OS open-sourced by AWS, purpose-built for running containers.
* **AWS ParallelCluster:** Open-source tool to easily deploy and manage HPC clusters.


<img width="1920" height="1080" alt="#3 High Performance Computing (HPC)" src="https://github.com/user-attachments/assets/b1929b59-4424-4dbb-a5c9-90d80329aca4" />

---

## 4. Edge and Hybrid Computing
Services that bring AWS capabilities closer to the end-user or into your own data center.

* **AWS Outposts:** A physical rack of servers installed in your data center, allowing you to use AWS services (like EC2) on-premise.
* **AWS Wavelength:** Deploys applications in telecom data centers (5G networks) for ultra-low latency.
* **VMWare Cloud on AWS:** Manage on-premise VMWare virtual machines using AWS infrastructure.
* **AWS Local Zones:** Edge data centers located near populated areas (outside standard AWS Regions) for faster computing close to users.


<img width="1920" height="1080" alt="#4 Edge and Hybrid" src="https://github.com/user-attachments/assets/3305c644-4643-4a5f-a37b-9f1e7266dc7d" />


---

## 5. Cost and Capacity Management
Tools to manage scaling and costs effectively.

* **AWS Batch:** Plans and executes batch computing workloads, often utilizing Spot Instances to save money.
* **AWS Compute Optimizer:** Uses machine learning to analyze usage history and suggest how to reduce costs and improve performance.
* **EC2 Autoscaling Groups (ASGs):** Automatically adds or removes servers to meet current traffic demand.
* **Elastic Load Balancer (ELB):** Distributes traffic across multiple instances and health-checks them.
* **AWS Elastic Beanstalk (EB):** Platform for easily deploying web apps (similar to Heroku) without managing underlying infrastructure.


<img width="1920" height="1080" alt="#5 Cost and Capacity Management" src="https://github.com/user-attachments/assets/80d587ba-299c-4b43-b145-36840b0b3f6c" />


---
