# LAB 01 - VPC + EC2 Web Server

## Objective
Create a custom VPC, subnets, launch EC2, and host a web server.

## Architecture Diagram
[View architecture diagram](architecture-diagram.png)

## Steps
1. Create VPC with CIDR 10.0.0.0/16
2. Create public and private subnets
3. Attach Internet Gateway
4. Configure route tables
5. Launch EC2 instance
6. Install Apache
7. Test website via public IP

## Challenges
- EC2 refused connection → update SG for port 80
- Subnet auto-assign public IP needed

## Commands / Configuration
[See commands.md](commands.md)

## Key Takeaways
- VPC, subnets, IGW, route tables, security groups basics

