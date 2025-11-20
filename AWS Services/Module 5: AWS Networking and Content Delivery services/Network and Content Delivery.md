# AWS Networking and Content Delivery Services

Welcome to the AWS Networking and Content Delivery module! This comprehensive guide covers everything from VPC fundamentals to global content delivery and load balancing solutions.

![AWS Networking and Content Delivery](./images/aws-networking-cdn.png)

## 📚 Module Overview

Master AWS networking services to build secure, scalable, and high-performance network architectures in the cloud. Learn to optimize content delivery and ensure application availability with AWS's global infrastructure.

## 🗂️ Course Content

---

## Part 1: Amazon VPC and Networking Fundamentals

### 1. Amazon VPC (Virtual Private Cloud)

**VPC Fundamentals**
- Logically isolated network in AWS Cloud
- Complete control over virtual networking environment
- IP address range (CIDR blocks)
- Region-specific with multi-AZ support
- Default vs Custom VPC

**VPC Components**
- **Subnets**: Public and private subnet configurations
- **Route Tables**: Control traffic routing
- **Internet Gateway (IGW)**: Internet connectivity
- **NAT Gateway/Instance**: Outbound internet for private subnets
- **VPC Peering**: Connect VPCs privately
- **VPC Endpoints**: Private access to AWS services
- **Elastic IP**: Static public IP addresses

**Security**
- **Security Groups**: Stateful instance-level firewall
- **Network ACLs (NACLs)**: Stateless subnet-level firewall
- **Flow Logs**: Network traffic monitoring
- **VPN Connections**: Secure site-to-site connectivity
- **AWS Direct Connect**: Dedicated network connection

### 2. AWS Networking Basics

**IP Addressing**
- Public vs Private IP addresses
- IPv4 and IPv6 support
- CIDR notation and subnet masking
- Elastic IPs and their use cases

**DNS Resolution**
- Route 53 integration
- VPC DNS resolution
- Private hosted zones
- Custom DNS servers

**Network Connectivity Options**
- Internet Gateway for public access
- NAT for private subnet internet access
- VPN for secure remote access
- Direct Connect for dedicated connectivity
- Transit Gateway for hub-and-spoke architecture

**Network Performance**
- Enhanced networking with ENA
- Placement groups (Cluster, Spread, Partition)
- Jumbo frames (MTU settings)
- Network bandwidth optimization

### 3. Subnets, Gateways, and Route Tables Explained

**Subnets Deep Dive**
- **Public Subnets**: 
  - Direct internet access via IGW
  - Use cases: Web servers, load balancers, bastion hosts
  - Auto-assign public IP configuration
  
- **Private Subnets**:
  - No direct internet access
  - Use cases: Databases, application servers, internal services
  - Internet access via NAT Gateway/Instance
  
- **Subnet Sizing**: Calculate CIDR blocks and available IPs
- **Reserved IPs**: AWS reserves 5 IPs per subnet

**Gateways**
- **Internet Gateway (IGW)**:
  - Horizontally scaled, redundant, highly available
  - One per VPC
  - Enables bidirectional internet communication
  
- **NAT Gateway**:
  - Managed NAT service
  - High availability within AZ
  - Bandwidth up to 100 Gbps
  - Elastic IP association
  
- **NAT Instance** (legacy):
  - EC2 instance acting as NAT
  - Manual scaling and management
  - Cost-effective for low traffic
  
- **Virtual Private Gateway (VGW)**:
  - VPN concentrator on AWS side
  - Supports site-to-site VPN
  
- **Customer Gateway**:
  - Physical or software appliance on-premises
  
- **Transit Gateway**:
  - Central hub for VPC and on-premises connectivity
  - Simplifies complex network topologies

**Route Tables**
- **Main Route Table**: Default for VPC
- **Custom Route Tables**: Subnet associations
- **Route Priority**: Most specific route wins
- **Route Propagation**: Automatic route updates
- **Local Routes**: Always present for VPC CIDR

**Routing Examples**
```
Destination          Target
10.0.0.0/16         local
0.0.0.0/0           igw-xxxxx      (Internet Gateway)
192.168.0.0/16      vgw-xxxxx      (VPN Connection)
```

### 4. Configuring and Deploying VPCs with Multiple Subnets

**VPC Architecture Patterns**

**Basic 3-Tier Architecture**
- Public Subnet: Web tier (ALB, bastion hosts)
- Private Subnet 1: Application tier (EC2 instances)
- Private Subnet 2: Database tier (RDS, ElastiCache)

**Multi-AZ High Availability Design**
- Deploy subnets across multiple AZs
- Redundant NAT Gateways per AZ
- Cross-AZ load balancing
- Database Multi-AZ deployments

**Step-by-Step Deployment**
1. **Create VPC**: Define CIDR block (e.g., 10.0.0.0/16)
2. **Create Subnets**: 
   - Public-AZ1: 10.0.1.0/24
   - Public-AZ2: 10.0.2.0/24
   - Private-AZ1: 10.0.11.0/24
   - Private-AZ2: 10.0.12.0/24
3. **Attach Internet Gateway**
4. **Create NAT Gateways** (one per AZ)
5. **Configure Route Tables**:
   - Public: Routes to IGW
   - Private: Routes to NAT Gateway
6. **Set Security Groups and NACLs**
7. **Launch Resources** in appropriate subnets

**Best Practices**
- Use separate subnets for each tier
- Implement multiple AZs for high availability
- Reserve IP space for future growth
- Use VPC Flow Logs for monitoring
- Implement least privilege security groups
- Tag resources for organization

### 5. Networking Cheat Sheets

**Quick Reference: VPC Limits**
- VPCs per region: 5 (soft limit)
- Subnets per VPC: 200
- Internet Gateways per VPC: 1
- NAT Gateways per AZ: 5
- Security Groups per VPC: 2,500
- Rules per Security Group: 60 inbound, 60 outbound

**Security Group vs NACL**
| Feature | Security Group | Network ACL |
|---------|---------------|-------------|
| **Level** | Instance | Subnet |
| **State** | Stateful | Stateless |
| **Rules** | Allow only | Allow & Deny |
| **Evaluation** | All rules | Order matters |
| **Association** | Instance | Subnet |

**Common CIDR Blocks**
- 10.0.0.0/8 (10.0.0.0 - 10.255.255.255)
- 172.16.0.0/12 (172.16.0.0 - 172.31.255.255)
- 192.168.0.0/16 (192.168.0.0 - 192.168.255.255)

---

## Part 2: AWS Content Delivery

### 6. AWS Content Delivery Overview

**Content Delivery Benefits**
- Reduced latency for global users
- Improved application performance
- Lower bandwidth costs
- DDoS protection
- Edge location caching

**AWS CDN Services**
- Amazon CloudFront: Global CDN
- AWS Global Accelerator: Network layer acceleration
- Amazon S3 Transfer Acceleration: Fast S3 uploads

### 7. Introduction to Amazon CloudFront

**CloudFront Fundamentals**
- Global Content Delivery Network (CDN)
- 400+ Points of Presence (Edge Locations)
- Caches content closer to users
- Supports static and dynamic content
- Integrates with AWS services (S3, EC2, ALB, Lambda@Edge)

**Key Components**
- **Distribution**: CDN configuration
- **Origin**: Source of content (S3, HTTP server, MediaPackage)
- **Edge Locations**: Cache servers worldwide
- **Regional Edge Caches**: Mid-tier caching layer
- **Behaviors**: URL pattern matching rules
- **Cache Policies**: Control caching behavior

**Distribution Types**
- **Web Distribution**: Websites, APIs, video streaming
- **RTMP Distribution**: Media streaming (deprecated)

**Features**
- **Custom SSL/TLS**: HTTPS support with ACM certificates
- **Geo-Restriction**: Block/allow countries
- **Signed URLs/Cookies**: Restrict content access
- **Lambda@Edge**: Run code at edge locations
- **Field-Level Encryption**: Encrypt sensitive data
- **Origin Failover**: High availability with multiple origins
- **Real-time Logs**: CloudWatch integration

**Use Cases**
- Static website hosting with S3
- Video streaming and on-demand content
- API acceleration
- Software distribution
- Dynamic web applications

**Pricing Factors**
- Data transfer out
- HTTP/HTTPS requests
- Invalidation requests
- Field-level encryption requests

### 8. Introduction to AWS Global Accelerator

**Global Accelerator Overview**
- Network layer service (OSI Layer 4)
- Uses AWS global network infrastructure
- Provides static anycast IP addresses
- Improves availability and performance

**How It Works**
- Client connects to nearest edge location
- Traffic routed over AWS global network
- Bypasses internet congestion
- Automatic failover to healthy endpoints

**Key Features**
- **Static IP Addresses**: 2 anycast IPs per accelerator
- **Health Checks**: Automatic traffic routing
- **Traffic Dials**: Control traffic distribution
- **Endpoint Weights**: Weighted routing
- **Client Affinity**: Session stickiness
- **DDoS Protection**: AWS Shield Standard included

**Global Accelerator vs CloudFront**
| Feature | Global Accelerator | CloudFront |
|---------|-------------------|------------|
| **Layer** | Layer 4 (TCP/UDP) | Layer 7 (HTTP/HTTPS) |
| **Caching** | No | Yes |
| **Use Case** | Non-HTTP traffic, UDP, static IPs | Web content, APIs, streaming |
| **Protocol** | TCP, UDP | HTTP, HTTPS, WebSocket |
| **IPs** | Static anycast | Dynamic |

**Use Cases**
- Gaming applications (UDP traffic)
- IoT device communication
- VoIP applications
- Applications requiring static IPs
- Multi-region failover

### 9. Amazon Route 53

**DNS Fundamentals**
- Domain Name System service
- Highly available and scalable
- Global service (not region-specific)
- 100% SLA availability

**Key Features**
- **Domain Registration**: Purchase domains
- **DNS Hosting**: Host DNS records
- **Health Checks**: Monitor endpoints
- **Traffic Flow**: Visual traffic routing
- **DNS Failover**: Automatic rerouting

**Routing Policies**
- **Simple**: Single resource routing
- **Weighted**: Distribute traffic by weight
- **Latency-Based**: Route to lowest latency
- **Failover**: Active-passive failover
- **Geolocation**: Route by user location
- **Geoproximity**: Route by geographic proximity
- **Multi-Value Answer**: Return multiple IPs with health checks

**Record Types**
- **A**: IPv4 address
- **AAAA**: IPv6 address
- **CNAME**: Alias to another domain
- **Alias**: AWS resource mapping (S3, CloudFront, ELB)
- **MX**: Mail server
- **TXT**: Text records (verification, SPF)
- **NS**: Name server
- **SOA**: Start of Authority

**Health Checks**
- Endpoint monitoring (HTTP, HTTPS, TCP)
- Calculated health checks
- CloudWatch alarm-based
- Health check interval: 30s or 10s (fast)
- String matching for response validation

**Use Cases**
- High availability with failover
- Global load distribution
- Blue-green deployments
- A/B testing with weighted routing

---

## Part 3: Load Balancing and Auto Scaling

### 10. Elastic Load Balancing and Auto Scaling

**Elastic Load Balancing (ELB) Overview**
- Distributes incoming traffic across targets
- High availability and fault tolerance
- Automatic scaling
- Health checks and monitoring
- Integration with Auto Scaling

**ELB Types**
1. **Application Load Balancer (ALB)**: HTTP/HTTPS (Layer 7)
2. **Network Load Balancer (NLB)**: TCP/UDP/TLS (Layer 4)
3. **Gateway Load Balancer (GLB)**: Virtual appliances (Layer 3)
4. **Classic Load Balancer (CLB)**: Legacy (Layer 4/7)

**Common Features**
- Health checks
- SSL/TLS termination
- Connection draining
- Cross-zone load balancing
- Access logs
- CloudWatch metrics

**Auto Scaling Overview**
- Automatic capacity adjustment
- Maintain application availability
- Cost optimization
- Dynamic and predictive scaling

**Auto Scaling Components**
- **Launch Template**: Instance configuration
- **Auto Scaling Group**: Manages EC2 instances
- **Scaling Policies**: When and how to scale
- **Scheduled Actions**: Time-based scaling

**Scaling Policies**
- **Target Tracking**: Maintain target metric (e.g., CPU 70%)
- **Step Scaling**: Scale based on metric thresholds
- **Simple Scaling**: Single adjustment
- **Predictive Scaling**: ML-based forecasting

### 11. Getting Started with Application Load Balancer (ALB)

**ALB Features**
- HTTP/HTTPS traffic (Layer 7)
- Host-based and path-based routing
- Support for microservices and containers
- WebSocket support
- HTTP/2 support
- Native IPv6 support
- Request tracing with X-Ray

**Key Capabilities**
- **Content-Based Routing**: Route by URL path, host, headers, query strings
- **Target Groups**: Route to different targets
- **Health Checks**: Advanced HTTP/HTTPS checks
- **Authentication**: Cognito, OIDC integration
- **Fixed Response**: Return custom responses
- **Redirect Rules**: HTTP to HTTPS redirects

**Target Types**
- EC2 instances
- IP addresses (on-premises, containers)
- Lambda functions
- Microservices in containers (ECS, EKS)

**Routing Examples**
```
Rule 1: example.com/api/* → API Target Group
Rule 2: example.com/images/* → Image Target Group
Rule 3: api.example.com → Microservice Target Group
Rule 4: Default → Web Server Target Group
```

**Use Cases**
- Microservices architectures
- Container-based applications
- Content-based routing
- Serverless applications (with Lambda targets)
- Multi-tenant applications

**Configuration Steps**
1. Create ALB in multiple AZs
2. Configure listeners (HTTP/HTTPS)
3. Create target groups
4. Define routing rules
5. Configure health checks
6. Add SSL certificate (ACM)
7. Register targets

### 12. Getting Started with Network Load Balancer (NLB)

**NLB Features**
- Ultra-high performance (millions of requests/sec)
- TCP/UDP/TLS traffic (Layer 4)
- Ultra-low latency (~100 microseconds)
- Static IP addresses (Elastic IPs)
- Preserves source IP address
- Zonal isolation

**Key Capabilities**
- **Connection-Based**: Routes TCP connections
- **Static IPs**: One per AZ
- **TLS Termination**: Decrypt SSL/TLS
- **Health Checks**: TCP, HTTP, HTTPS
- **Cross-Zone Load Balancing**: Optional
- **PrivateLink Support**: Service endpoints

**Target Types**
- EC2 instances
- IP addresses
- Application Load Balancers
- On-premises servers

**Use Cases**
- Extreme performance requirements
- Static or Elastic IP requirement
- TCP/UDP protocols
- Gaming applications
- IoT applications
- Financial trading platforms
- Real-time communication

**NLB vs ALB**
| Feature | NLB | ALB |
|---------|-----|-----|
| **Layer** | Layer 4 | Layer 7 |
| **Performance** | Millions RPS | Thousands RPS |
| **Latency** | Ultra-low | Low |
| **Static IP** | Yes | No |
| **Protocol** | TCP, UDP, TLS | HTTP, HTTPS |
| **Routing** | Connection-based | Content-based |
| **Price** | Lower | Higher |

**Configuration Steps**
1. Create NLB with AZ selection
2. Assign Elastic IPs (optional)
3. Configure listeners (TCP/TLS/UDP)
4. Create target groups
5. Configure health checks
6. Register targets
7. Enable cross-zone load balancing (optional)

---

## Part 4: Application Integration

### 13. Amazon Application Integration Overview

**Integration Services**
- Decouple applications and microservices
- Asynchronous communication
- Event-driven architectures
- Scalability and resilience

**Key Services**
- **Amazon API Gateway**: API management
- **Amazon SQS**: Message queuing
- **Amazon SNS**: Pub/sub messaging
- **Amazon EventBridge**: Event bus
- **AWS Step Functions**: Workflow orchestration
- **Amazon MQ**: Managed message brokers

### 14. Introduction to Amazon API Gateway

**API Gateway Overview**
- Fully managed API creation and management
- RESTful and WebSocket APIs
- Serverless, scalable, and secure
- Integration with Lambda, EC2, AWS services

**API Types**
- **REST API**: RESTful HTTP API
- **HTTP API**: Lightweight, lower cost
- **WebSocket API**: Two-way communication

**Key Features**
- **Request/Response Transformation**: Modify data
- **Authorization**: IAM, Cognito, Lambda authorizers
- **Throttling**: Rate limiting and quotas
- **Caching**: Response caching at edge
- **API Keys**: Client identification
- **Usage Plans**: Monetization and quotas
- **CORS**: Cross-origin resource sharing
- **Canary Deployments**: Gradual rollouts

**Integrations**
- **Lambda Functions**: Serverless backend
- **HTTP Endpoints**: Any HTTP endpoint
- **AWS Services**: DynamoDB, S3, SNS, SQS
- **VPC Link**: Private resources in VPC
- **Mock Integrations**: Return static responses

**Deployment Stages**
- **Stage Variables**: Environment-specific config
- **Stage Canary**: Percentage-based traffic routing
- **API Versioning**: Multiple API versions

**Security**
- **IAM Permissions**: AWS signature v4
- **Lambda Authorizers**: Custom authentication
- **Cognito User Pools**: User authentication
- **API Keys**: Client identification
- **Resource Policies**: Access control
- **WAF Integration**: Web application firewall

**Monitoring**
- CloudWatch Logs
- CloudWatch Metrics
- X-Ray tracing
- Access logs

**Use Cases**
- Serverless APIs with Lambda
- Mobile and web application backends
- Microservices API management
- Legacy system modernization
- Third-party API exposure

**Pricing**
- Pay per API call
- Data transfer costs
- Caching charges
- HTTP APIs are cheaper than REST APIs

**Best Practices**
- Enable caching for frequently accessed data
- Implement throttling and quotas
- Use API stages for environments
- Enable CloudWatch logging
- Implement proper authorization
- Use Lambda proxy integration for simplicity
- Version your APIs properly

## 🎯 Learning Objectives

By completing this module, you will be able to:

- ✅ Design and implement secure VPC architectures
- ✅ Configure subnets, route tables, and gateways
- ✅ Deploy multi-tier applications across multiple AZs
- ✅ Optimize content delivery with CloudFront and Global Accelerator
- ✅ Implement DNS routing strategies with Route 53
- ✅ Configure load balancers (ALB, NLB) for high availability
- ✅ Set up Auto Scaling for dynamic capacity management
- ✅ Create and secure APIs with API Gateway
- ✅ Troubleshoot networking and connectivity issues

## 📊 Service Comparison Tables

### Load Balancer Comparison
| Feature | ALB | NLB | Classic LB |
|---------|-----|-----|------------|
| **Layer** | 7 (HTTP/HTTPS) | 4 (TCP/UDP/TLS) | 4 & 7 |
| **Performance** | Good | Excellent | Basic |
| **Static IP** | No | Yes | No |
| **Path Routing** | Yes | No | No |
| **WebSocket** | Yes | Yes | No |
| **Lambda Target** | Yes | No | No |
| **Use Case** | Web apps, microservices | High performance, gaming | Legacy apps |

### Content Delivery Comparison
| Feature | CloudFront | Global Accelerator | S3 Transfer Acceleration |
|---------|-----------|-------------------|------------------------|
| **Layer** | Layer 7 | Layer 4 | Application |
| **Caching** | Yes | No | No |
| **Static IP** | No | Yes | No |
| **Use Case** | Content delivery | App acceleration | S3 uploads |
| **Protocol** | HTTP/HTTPS | TCP/UDP | HTTP/HTTPS |

## 📝 Study Progress

- [ ] Amazon VPC
- [ ] AWS Networking Basics
- [ ] Subnets, Gateways, and Route Tables
- [ ] Configuring VPCs with Multiple Subnets
- [ ] Networking Cheat Sheets
- [ ] AWS Content Delivery
- [ ] Amazon CloudFront
- [ ] AWS Global Accelerator
- [ ] Amazon Route 53
- [ ] Elastic Load Balancing and Auto Scaling
- [ ] Application Load Balancer
- [ ] Network Load Balancer
- [ ] Amazon Application Integration
- [ ] Amazon API Gateway

## 🔗 Essential Resources

- [Amazon VPC Documentation](https://docs.aws.amazon.com/vpc/)
- [CloudFront Developer Guide](https://docs.aws.amazon.com/cloudfront/)
- [Route 53 Documentation](https://docs.aws.amazon.com/route53/)
- [Elastic Load Balancing Guide](https://docs.aws.amazon.com/elasticloadbalancing/)
- [API Gateway Documentation](https://docs.aws.amazon.com/apigateway/)
- [AWS Networking & Content Delivery Blog](https://aws.amazon.com/blogs/networking-and-content-delivery/)

## 💡 Best Practices

### VPC Design
- Plan IP address space carefully (avoid overlaps)
- Use multiple AZs for high availability
- Implement defense in depth (Security Groups + NACLs)
- Enable VPC Flow Logs for troubleshooting
- Use VPC endpoints for AWS services (cost savings)

### Content Delivery
- Enable CloudFront caching for static content
- Use Global Accelerator for TCP/UDP traffic
- Implement geo-restriction where applicable
- Monitor cache hit ratio
- Use origin failover for resilience

### Load Balancing
- Enable health checks on all targets
- Use cross-zone load balancing for even distribution
- Implement connection draining
- Enable access logs for compliance
- Use target groups for blue-green deployments

### API Gateway
- Implement throttling and quotas
- Enable caching for frequently accessed endpoints
- Use Lambda proxy integration for simplicity
- Enable CloudWatch logging
- Implement proper authentication and authorization

## 🧪 Hands-On Labs

### VPC Labs
- Create a VPC with public and private subnets
- Configure NAT Gateway for private subnet internet access
- Set up VPC peering between two VPCs
- Implement VPC endpoints for S3 and DynamoDB
- Configure security groups and NACLs

### Content Delivery Labs
- Set up CloudFront distribution with S3 origin
- Configure custom SSL certificate with ACM
- Implement signed URLs for restricted content
- Set up Global Accelerator for EC2 instances
- Configure Route 53 with health checks and failover

### Load Balancing Labs
- Deploy ALB with path-based routing
- Configure NLB with static Elastic IPs
- Set up Auto Scaling group with target tracking
- Implement blue-green deployment with ALB
- Configure SSL/TLS termination on load balancer
