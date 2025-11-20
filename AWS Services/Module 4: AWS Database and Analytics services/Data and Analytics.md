# AWS Database and Analytics Services

Welcome to the AWS Database and Analytics Services module! This repository covers AWS database solutions and big data analytics services to help you build scalable, high-performance data-driven applications.

![AWS Database and Analytics Services](./images/aws-database-analytics.png)

## 📚 Module Overview

This module explores AWS managed database services and analytics platforms, covering everything from relational databases to real-time streaming analytics.

## 🗂️ Course Content

### 1. Introduction to Building with AWS Databases

#### **Relational Databases**
**Amazon RDS (Relational Database Service)**
- Supported engines: MySQL, PostgreSQL, MariaDB, Oracle, SQL Server
- Multi-AZ deployments for high availability
- Read replicas for performance
- Automated backups and snapshots
- Database parameter groups and option groups

**Amazon Aurora**
- MySQL and PostgreSQL-compatible
- Up to 5x faster than MySQL, 3x faster than PostgreSQL
- Aurora Serverless for variable workloads
- Global databases for disaster recovery
- Aurora Multi-Master for write scaling

#### **NoSQL Databases**
**Amazon DynamoDB**
- Fully managed key-value and document database
- Single-digit millisecond performance at any scale
- DynamoDB Streams for change data capture
- Global tables for multi-region replication
- On-demand and provisioned capacity modes
- DynamoDB Accelerator (DAX) for caching

**Amazon DocumentDB**
- MongoDB-compatible document database
- Fully managed with automatic scaling
- High availability and durability

#### **In-Memory Databases**
**Amazon ElastiCache**
- Redis and Memcached support
- Microsecond latency
- Use cases: Caching, session management, real-time analytics

**Amazon MemoryDB for Redis**
- Redis-compatible in-memory database
- Microsecond read and single-digit millisecond write latency
- Multi-AZ durability

#### **Specialized Databases**
**Amazon Neptune**
- Fully managed graph database
- Supports Property Graph and RDF
- Use cases: Social networks, recommendation engines, fraud detection

**Amazon Timestream**
- Time series database
- Built for IoT and operational applications
- Automatic data lifecycle management

**Amazon QLDB (Quantum Ledger Database)**
- Immutable, cryptographically verifiable ledger
- Use cases: Financial transactions, supply chain

**Amazon Keyspaces**
- Apache Cassandra-compatible database
- Serverless and scalable

#### **Database Migration**
**AWS Database Migration Service (DMS)**
- Migrate databases to AWS with minimal downtime
- Homogeneous and heterogeneous migrations
- Continuous data replication
- Schema conversion with AWS SCT

### 2. Database Cheat Sheets

#### Quick Reference Guides
- **RDS vs Aurora**: Feature comparison
- **DynamoDB**: Partition keys, sort keys, indexes
- **Database Selection**: Decision tree for choosing the right database
- **Performance Optimization**: Best practices per database type
- **Security**: Encryption, IAM, network isolation
- **Backup and Recovery**: Strategies per service
- **Cost Optimization**: Pricing models and tips

#### Common Use Cases
- **E-commerce**: Product catalogs, shopping carts, transactions
- **Gaming**: Player data, leaderboards, session management
- **IoT**: Time series data, device state management
- **Financial Services**: Transactions, audit trails
- **Social Media**: User profiles, relationships, feeds

### 3. Amazon EMR Getting Started

**Amazon EMR (Elastic MapReduce)**
- Managed Hadoop and Spark framework
- Process vast amounts of data quickly
- Cost-effective big data processing

#### **Core Concepts**
- **Clusters**: Collection of EC2 instances
- **Master Node**: Manages the cluster
- **Core Nodes**: Run tasks and store data in HDFS
- **Task Nodes**: Run tasks only (no data storage)

#### **Supported Frameworks**
- Apache Hadoop
- Apache Spark
- Apache HBase
- Presto
- Apache Flink
- Apache Hudi

#### **EMR Use Cases**
- Log analysis and data processing
- Machine learning with Spark MLlib
- ETL (Extract, Transform, Load) operations
- Genomics and scientific computing
- Financial analysis and risk modeling

#### **EMR Features**
- **EMR Notebooks**: Interactive development with Jupyter
- **EMR Studio**: IDE for data scientists and engineers
- **EMR Serverless**: Run applications without managing clusters
- **Auto Scaling**: Dynamic resource allocation
- **Integration**: S3, DynamoDB, Redshift, Kinesis

#### **Best Practices**
- Use spot instances for cost savings
- Choose appropriate instance types
- Enable compression for data transfer
- Monitor with CloudWatch
- Implement data encryption

### 4. Amazon Kinesis Video Streams - Getting Started

**Amazon Kinesis Video Streams**
- Capture, process, and store video streams for analytics and ML
- Real-time and batch processing
- Secure, durable, and scalable

#### **Core Components**
- **Video Streams**: Ingest video from devices
- **Producers**: Devices sending video (cameras, phones, drones)
- **Consumers**: Applications processing video data
- **Playback**: HLS and DASH streaming protocols

#### **Key Features**
- **Time-indexed storage**: Access video by timestamp
- **Encryption**: Data encrypted in transit and at rest
- **Retention**: Configure 1 hour to 10 years
- **Fragment metadata**: Add custom metadata to video chunks
- **WebRTC**: Real-time peer-to-peer communication

#### **Use Cases**
- **Smart Home**: Security cameras, baby monitors
- **Smart City**: Traffic monitoring, public safety
- **Industrial IoT**: Equipment monitoring, quality control
- **Retail**: Customer analytics, inventory monitoring
- **Healthcare**: Remote patient monitoring, telemedicine

#### **Integration with AWS Services**
- **Amazon Rekognition Video**: Video analysis and object detection
- **Amazon SageMaker**: Custom ML model inference
- **AWS Lambda**: Trigger functions on video events
- **Kinesis Data Streams**: Process video metadata
- **S3**: Archive video for long-term storage

#### **Getting Started Steps**
1. Create a video stream
2. Set up producer (camera/device) with SDK
3. Configure stream retention and encryption
4. Implement consumer application
5. Integrate with Rekognition or SageMaker
6. Set up monitoring and alerts

#### **Best Practices**
- Use appropriate retention periods to manage costs
- Implement proper error handling and retries
- Enable CloudWatch monitoring
- Secure streams with IAM policies
- Use fragment metadata for efficient processing


## 🎯 Learning Objectives

By completing this module, you will be able to:

- ✅ Choose the right database for your application requirements
- ✅ Configure and optimize AWS database services
- ✅ Implement database security and backup strategies
- ✅ Process big data with Amazon EMR
- ✅ Ingest and analyze video streams with Kinesis Video Streams
- ✅ Migrate databases to AWS efficiently
- ✅ Design scalable data architectures

## 📊 Database Service Comparison

| Service | Type | Use Case | Scalability |
|---------|------|----------|-------------|
| **Amazon RDS** | Relational | Traditional apps, OLTP | Vertical + Read Replicas |
| **Amazon Aurora** | Relational | High-performance OLTP | Auto-scaling storage |
| **DynamoDB** | NoSQL | Serverless apps, high-scale | Unlimited horizontal |
| **ElastiCache** | In-Memory | Caching, sessions | Horizontal scaling |
| **Neptune** | Graph | Social networks, fraud | Horizontal scaling |
| **Timestream** | Time Series | IoT, metrics | Auto-scaling |
| **Redshift** | Data Warehouse | Analytics, BI | Massively parallel |

## 🔑 Key Concepts

### Database Selection Criteria
- **Data Model**: Relational, key-value, document, graph
- **Performance**: Latency, throughput requirements
- **Scalability**: Vertical vs horizontal scaling needs
- **Consistency**: Strong vs eventual consistency
- **Availability**: Multi-AZ, global replication
- **Cost**: Storage, compute, data transfer

### Analytics Pipeline
1. **Ingest**: Kinesis, DMS, DataSync
2. **Process**: EMR, Lambda, Glue
3. **Store**: S3, Redshift, DynamoDB
4. **Analyze**: Athena, QuickSight, SageMaker
5. **Visualize**: QuickSight, Grafana

## 📝 Study Progress

- [ ] Introduction to Building with AWS Databases
- [ ] Database Cheat Sheets
- [ ] Amazon EMR Getting Started
- [ ] Amazon Kinesis Video Streams Getting Started

## 🔗 Essential Resources

- [AWS Database Services](https://aws.amazon.com/products/databases/)
- [Amazon RDS Documentation](https://docs.aws.amazon.com/rds/)
- [DynamoDB Developer Guide](https://docs.aws.amazon.com/dynamodb/)
- [Amazon EMR Documentation](https://docs.aws.amazon.com/emr/)
- [Kinesis Video Streams Guide](https://docs.aws.amazon.com/kinesis-video-streams/)
- [AWS Database Blog](https://aws.amazon.com/blogs/database/)

## 💡 Best Practices

### Database Performance
- Use appropriate instance sizes and storage types
- Implement connection pooling
- Leverage read replicas for read-heavy workloads
- Enable caching with ElastiCache or DAX
- Monitor with CloudWatch and Performance Insights

### Security
- Enable encryption at rest and in transit
- Use IAM authentication where possible
- Implement VPC security groups and NACLs
- Enable audit logging (CloudTrail, database logs)
- Rotate credentials regularly

### Cost Optimization
- Use Reserved Instances for predictable workloads
- Enable auto-scaling for DynamoDB
- Implement data lifecycle policies
- Use appropriate storage tiers
- Monitor with AWS Cost Explorer

## 🧪 Hands-On Labs

### Database Labs
- Create and configure an RDS MySQL instance
- Set up DynamoDB tables with GSI and LSI
- Configure Aurora Serverless with auto-scaling
- Migrate a database using AWS DMS

### Analytics Labs
- Launch an EMR cluster and run Spark jobs
- Set up Kinesis Video Streams producer and consumer
- Process video with Amazon Rekognition
- Create data pipeline with EMR and S3

## 📌 Exam Tips (Cloud Practitioner)

- Understand when to use relational vs NoSQL databases
- Know the difference between RDS and Aurora
- Remember DynamoDB's key features (NoSQL, serverless, fast)
- Understand EMR use cases (big data processing)
- Know Kinesis Video Streams for video ingestion
- Understand database backup and recovery options


**Module:** 4 - AWS Database and Analytics Services  
**Last Updated:** November 2025  
**Status:** In Progress 🔄

*Master AWS Databases and Analytics! 📊�
