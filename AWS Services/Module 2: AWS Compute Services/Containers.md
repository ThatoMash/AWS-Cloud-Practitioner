# AWS Cloud Architecture: Containers 

## Part 1: Modern Application Development (Microservices & Containers)

### Architecture Patterns: Monolithic vs. Microservices
Modern cloud development often shifts from monolithic architectures to microservices. In a Monolithic Architecture, one app is responsible for everything, and functionality is tightly coupled. In contrast, a Microservices Architecture consists of multiple apps where each is responsible for one thing, and functionality is isolated and stateless.


<img width="1920" height="1080" alt="#2 What are Microservices" src="https://github.com/user-attachments/assets/29c8c271-51c0-48b1-9a28-51e631e4d576" />


### Virtualization: VMs vs. Containers
To support these architectures, compute efficiency is key. Virtual Machines (VMs) do not make the best use of space because they include a full Guest OS, leading to wasted space. Containers allow you to run multiple apps which are virtually isolated from each other, sharing the Host OS kernel, which improves efficiency.


<img width="1920" height="1080" alt="#1 VMs vs Containers" src="https://github.com/user-attachments/assets/5b6faa58-af2f-498f-9452-83f5c4819300" />



### Docker Ecosystem
Docker is a set of Platform as a Service (PaaS) products that use OS-level virtualization to deliver software in packages called containers. Key components include the **Dockerfile** (configuration on how to provision a container) and **Dockerhub** (a public online repository for containers).


<img width="1920" height="1080" alt="#4 Docker" src="https://github.com/user-attachments/assets/b26266e5-2c8a-4a2d-9f90-d2462f02de75" />

### AWS Container Services
AWS offers "4 core" container services. **Elastic Container Service (ECS)** acts as a self-managed orchestrator, while **AWS Fargate** offers a serverless, AWS-managed experience that scales to zero cost. For Kubernetes users, **Elastic Kubernetes Service (EKS)** provides an open-source environment to avoid vendor lock-in.


<img width="1920" height="1080" alt="#6 Container Services" src="https://github.com/user-attachments/assets/04788295-343c-40e9-a080-c2523483d67c" />


### Kubernetes (K8)
Kubernetes is an open-source container orchestration system for automating deployment, scaling, and management of containers. A unique component of Kubernetes is the **Pod**, which is a group of one or more containers with shared storage and network resources.



<img width="1920" height="1080" alt="#3 Kubernetes" src="https://github.com/user-attachments/assets/5f049abd-6f96-4cec-9c82-e044c8f0ea85" />


### Container Alternatives: Podman
While Docker is standard, alternatives exist. **Podman** is a container engine that is OCI-compliant and serves as a drop-in replacement for Docker. Unlike Docker, which uses a daemon, Podman is daemon-less and is often used alongside tools like **Buildah** (to build images) and **Skopeo** (to move images).


<img width="1920" height="1080" alt="#5 Podman" src="https://github.com/user-attachments/assets/73a060d5-b38e-437e-893e-3baae07f8e83" />

---


By combining modern containerization strategies (using Docker, Kubernetes, or ECS) with the rigorous best practices of the Well-Architected Framework, organizations can build cloud-native applications that are secure, efficient, and resilient.
