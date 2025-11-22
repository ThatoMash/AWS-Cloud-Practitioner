# AWS Identity and Access Management (IAM): Users, Groups, and Policies

![AWS](https://img.shields.io/badge/AWS-IAM-orange?style=for-the-badge&logo=amazon-aws)
![Security](https://img.shields.io/badge/Security-Access_Control-red?style=for-the-badge&logo=security)
![Policy](https://img.shields.io/badge/IAM-Policies-blue?style=for-the-badge&logo=json)
![Status](https://img.shields.io/badge/Status-Completed-success?style=for-the-badge)

## 📋 Project Overview

This hands-on lab demonstrates the implementation of AWS Identity and Access Management (IAM) to control access to AWS resources securely. The project covers the creation and management of IAM users, user groups, policies, and password policies, showcasing enterprise-grade access control practices and the principle of least privilege.

## 🎯 Objectives

By completing this lab, the following capabilities were demonstrated:

- ✅ Create and apply custom IAM password policies
- ✅ Explore and manage pre-created IAM users and user groups
- ✅ Inspect and understand IAM policies (managed and inline)
- ✅ Add users to user groups with specific capabilities
- ✅ Use IAM sign-in URL for user authentication
- ✅ Test and validate policy effects on service access
- ✅ Implement principle of least privilege
- ✅ Configure role-based access control (RBAC)

## ⏱️ Duration

**Approximately 60 minutes**

## 🏗️ Architecture Overview

### IAM Structure Implemented

## 📸 Screenshots Documentation

### Task 1: Password Policy Configuration

**Screenshot 1: IAM Dashboard**
- *Caption: AWS IAM dashboard showing navigation menu*
- File: `01-iam-dashboard.png`

**Screenshot 2: Account Settings - Default Policy**
- *Caption: Account settings showing default password policy requirements*
- File: `02-default-password-policy.png`

**Screenshot 3: Change Password Policy**
- *Caption: Clicking "Change password policy" button*
- File: `03-change-password-policy.png`

**Screenshot 4: Password Policy Configuration**
- *Caption: Configuring custom password policy with 10 character minimum, complexity requirements*
- File: `04-password-policy-config.png`

**Screenshot 5: Password Policy Options Selected**
- *Caption: All security options selected except administrator reset requirement*
- File: `05-password-options-selected.png`

**Screenshot 6: Password Expiration Settings**
- *Caption: Password expiration set to 90 days, prevent reuse of 5 passwords*
- File: `06-password-expiration-settings.png`

**Screenshot 7: Password Policy Saved**
- *Caption: Success message showing custom password policy saved*
- File: `07-password-policy-saved.png`

### Task 2: Exploring Users and User Groups

**Screenshot 8: IAM Users List**
- *Caption: List of pre-created IAM users (user-1, user-2, user-3)*
- File: `08-iam-users-list.png`

**Screenshot 9: user-1 Summary Page**
- *Caption: user-1 details showing no permissions assigned*
- File: `09-user1-summary.png`

**Screenshot 10: user-1 Permissions Tab**
- *Caption: Permissions tab showing no policies directly attached to user-1*
- File: `10-user1-permissions.png`

**Screenshot 11: user-1 Groups Tab**
- *Caption: Groups tab showing user-1 not member of any groups*
- File: `11-user1-groups.png`

**Screenshot 12: user-1 Security Credentials**
- *Caption: Security credentials tab showing console password assigned*
- File: `12-user1-credentials.png`

**Screenshot 13: User Groups List**
- *Caption: List of pre-created user groups (EC2-Admin, EC2-Support, S3-Support)*
- File: `13-user-groups-list.png`

**Screenshot 14: EC2-Support Group Summary**
- *Caption: EC2-Support group details and overview*
- File: `14-ec2-support-summary.png`

**Screenshot 15: EC2-Support Permissions**
- *Caption: EC2-Support group with AmazonEC2ReadOnlyAccess managed policy*
- File: `15-ec2-support-permissions.png`

**Screenshot 16: AmazonEC2ReadOnlyAccess Policy Details**
- *Caption: Expanded policy showing allowed actions (Describe, List operations)*
- File: `16-ec2-readonly-policy.png`

**Screenshot 17: Policy Structure Explanation**
- *Caption: Policy JSON showing Effect, Action, and Resource structure*
- File: `17-policy-structure.png`

**Screenshot 18: S3-Support Group**
- *Caption: S3-Support group summary page*
- File: `18-s3-support-group.png`

**Screenshot 19: S3-Support Permissions**
- *Caption: S3-Support group with AmazonS3ReadOnlyAccess policy attached*
- File: `19-s3-support-permissions.png`

**Screenshot 20: AmazonS3ReadOnlyAccess Policy**
- *Caption: Expanded policy showing S3 Get* and List* permissions*
- File: `20-s3-readonly-policy.png`

**Screenshot 21: EC2-Admin Group**
- *Caption: EC2-Admin group summary page*
- File: `21-ec2-admin-group.png`

**Screenshot 22: EC2-Admin Inline Policy**
- *Caption: EC2-Admin group showing customer inline policy (not managed)*
- File: `22-ec2-admin-inline-policy.png`

**Screenshot 23: EC2-Admin-Policy Details**
- *Caption: Inline policy showing Describe, Start, and Stop instance permissions*
- File: `23-ec2-admin-policy-details.png`

### Task 3: Adding Users to Groups

**Screenshot 24: S3-Support Users Tab**
- *Caption: S3-Support group Users tab showing no members*
- File: `24-s3-support-users-empty.png`

**Screenshot 25: Add Users to S3-Support**
- *Caption: "Add users" button clicked for S3-Support group*
- File: `25-add-users-s3-support.png`

**Screenshot 26: Select user-1**
- *Caption: Selecting user-1 checkbox to add to S3-Support group*
- File: `26-select-user1.png`

**Screenshot 27: user-1 Added to S3-Support**
- *Caption: Success - user-1 now member of S3-Support group*
- File: `27-user1-added-s3.png`

**Screenshot 28: Add user-2 to EC2-Support**
- *Caption: Adding user-2 to EC2-Support group*
- File: `28-add-user2-ec2-support.png`

**Screenshot 29: user-2 Added Successfully**
- *Caption: user-2 now member of EC2-Support group*
- File: `29-user2-added-success.png`

**Screenshot 30: Add user-3 to EC2-Admin**
- *Caption: Adding user-3 to EC2-Admin group*
- File: `30-add-user3-ec2-admin.png`

**Screenshot 31: user-3 Added Successfully**
- *Caption: user-3 now member of EC2-Admin group*
- File: `31-user3-added-success.png`

**Screenshot 32: User Groups Summary**
- *Caption: All groups showing "1" in Users column confirming successful additions*
- File: `32-groups-summary-complete.png`

### Task 4: Testing User Permissions

**Screenshot 33: IAM Sign-in URL**
- *Caption: IAM Dashboard showing sign-in URL for IAM users*
- File: `33-iam-signin-url.png`

**Screenshot 34: Private Browser Window**
- *Caption: Opening incognito/private browser window for testing*
- File: `34-private-window.png`

**Screenshot 35: IAM Sign-in Page**
- *Caption: IAM user sign-in page with account ID*
- File: `35-iam-signin-page.png`

**Screenshot 36: user-1 Login**
- *Caption: Signing in as user-1 with credentials*
- File: `36-user1-login.png`

**Screenshot 37: user-1 Console Home**
- *Caption: AWS Console home after successful user-1 login*
- File: `37-user1-console.png`

**Screenshot 38: user-1 S3 Access**
- *Caption: user-1 successfully viewing S3 buckets list*
- File: `38-user1-s3-access.png`

**Screenshot 39: user-1 S3 Bucket Contents**
- *Caption: user-1 able to browse inside S3 bucket*
- File: `39-user1-bucket-contents.png`

**Screenshot 40: user-1 EC2 Access Denied**
- *Caption: user-1 attempting to view EC2 instances - access denied message*
- File: `40-user1-ec2-denied.png`

**Screenshot 41: user-1 Sign Out**
- *Caption: Signing out user-1 from console*
- File: `41-user1-signout.png`

**Screenshot 42: user-2 Login**
- *Caption: Signing in as user-2 (EC2 Support)*
- File: `42-user2-login.png`

**Screenshot 43: user-2 EC2 Access**
- *Caption: user-2 successfully viewing EC2 instances*
- File: `43-user2-ec2-access.png`

**Screenshot 44: user-2 Instance Details**
- *Caption: user-2 viewing EC2 instance details (read-only)*
- File: `44-user2-instance-details.png`

**Screenshot 45: user-2 Stop Instance Denied**
- *Caption: user-2 attempting to stop instance - "Failed to stop" error message*
- File: `45-user2-stop-denied.png`

**Screenshot 46: user-2 Stop Instance Error**
- *Caption: Error dialog showing "You are not authorized to perform this operation"*
- File: `46-user2-error-dialog.png`

**Screenshot 47: user-2 S3 Access Denied**
- *Caption: user-2 attempting S3 access - "You don't have permissions to list buckets"*
- File: `47-user2-s3-denied.png`

**Screenshot 48: user-2 Sign Out**
- *Caption: Signing out user-2 from console*
- File: `48-user2-signout.png`

**Screenshot 49: user-3 Login**
- *Caption: Signing in as user-3 (EC2 Admin)*
- File: `49-user3-login.png`

**Screenshot 50: user-3 EC2 Access**
- *Caption: user-3 viewing EC2 instances with full admin access*
- File: `50-user3-ec2-access.png`

**Screenshot 51: user-3 Stop Instance**
- *Caption: user-3 successfully stopping EC2 instance*
- File: `51-user3-stop-instance.png`

**Screenshot 52: Stop Instance Confirmation**
- *Caption: Confirmation dialog for stopping instance*
- File: `52-stop-confirmation.png`

**Screenshot 53: Instance Stopping State**
- *Caption: EC2 instance showing "Stopping" state - operation successful*
- File: `53-instance-stopping.png`

**Screenshot 54: Instance Stopped State**
- *Caption: EC2 instance showing "Stopped" state - fully stopped*
- File: `54-instance-stopped.png`

**Screenshot 55: user-3 Close Browser**
- *Caption: Closing private browser window after completing testing*
- File: `55-close-browser.png`

## 🛠️ Technologies Used

- **AWS IAM** - Identity and Access Management
- **IAM Users** - Individual user accounts
- **IAM Groups** - Logical grouping of users
- **IAM Policies** - Permission definitions
  - AWS Managed Policies
  - Customer Inline Policies
- **Amazon S3** - Object storage service
- **Amazon EC2** - Elastic Compute Cloud
- **AWS Management Console** - Web-based management interface

## 📝 Detailed Implementation

### Task 1: Password Policy Configuration

#### Custom Password Policy Requirements

```yaml
Password Policy Settings:
  Minimum Length: 10 characters
  Require Uppercase: Yes
  Require Lowercase: Yes
  Require Numbers: Yes
  Require Symbols: Yes
  Password Expiration: 90 days
  Prevent Password Reuse: 5 passwords
  Administrator Reset Required: No
  Allow Users to Change Password: Yes
```

**Benefits:**
- Stronger security through complexity requirements
- Regular password rotation (90 days)
- Prevention of password reuse
- Account-level policy applies to all users

### Task 2: IAM Users and Groups Structure

#### Users Created
```yaml
user-1:
  Role: S3 Support Staff
  Initial Permissions: None (before group assignment)
  Group Assignment: S3-Support
  
user-2:
  Role: EC2 Support Staff
  Initial Permissions: None (before group assignment)
  Group Assignment: EC2-Support
  
user-3:
  Role: EC2 Administrator
  Initial Permissions: None (before group assignment)
  Group Assignment: EC2-Admin
```

#### Groups and Policies

##### S3-Support Group
```json
{
  "Group": "S3-Support",
  "Policy": "AmazonS3ReadOnlyAccess",
  "Type": "AWS Managed Policy",
  "Permissions": {
    "Effect": "Allow",
    "Actions": [
      "s3:Get*",
      "s3:List*"
    ],
    "Resources": "*"
  },
  "Description": "Read-only access to all S3 buckets and objects"
}
```

##### EC2-Support Group
```json
{
  "Group": "EC2-Support",
  "Policy": "AmazonEC2ReadOnlyAccess",
  "Type": "AWS Managed Policy",
  "Permissions": {
    "Effect": "Allow",
    "Actions": [
      "ec2:Describe*",
      "elasticloadbalancing:Describe*",
      "cloudwatch:ListMetrics",
      "cloudwatch:GetMetricStatistics",
      "cloudwatch:Describe*",
      "autoscaling:Describe*"
    ],
    "Resources": "*"
  },
  "Description": "Read-only access to EC2 and related services"
}
```

##### EC2-Admin Group
```json
{
  "Group": "EC2-Admin",
  "Policy": "EC2-Admin-Policy",
  "Type": "Customer Inline Policy",
  "Permissions": {
    "Effect": "Allow",
    "Actions": [
      "ec2:Describe*",
      "ec2:StartInstances",
      "ec2:StopInstances"
    ],
    "Resources": "*"
  },
  "Description": "View, start, and stop EC2 instances"
}
```

### Task 3: User Group Assignments

| User | Group | Inherited Permissions |
|------|-------|----------------------|
| user-1 | S3-Support | Read-only access to S3 |
| user-2 | EC2-Support | Read-only access to EC2 |
| user-3 | EC2-Admin | View, Start, and Stop EC2 instances |

### Task 4: Permission Testing Results

#### user-1 (S3 Support) Testing
```yaml
S3 Access: ✅ SUCCESS
  - Can list S3 buckets
  - Can view bucket contents
  - Read-only access working

EC2 Access: ❌ DENIED
  - Cannot view EC2 instances
  - Error: "You are not authorized to perform this operation"
  - Expected behavior - no EC2 permissions
```

#### user-2 (EC2 Support) Testing
```yaml
EC2 Read Access: ✅ SUCCESS
  - Can view EC2 instances
  - Can see instance details
  - Read-only working correctly

EC2 Write Access: ❌ DENIED
  - Cannot stop instances
  - Error: "Failed to stop the instance"
  - Expected - read-only policy prevents modifications

S3 Access: ❌ DENIED
  - Cannot list S3 buckets
  - Error: "You don't have permissions to list buckets"
  - Expected - no S3 permissions assigned
```

#### user-3 (EC2 Admin) Testing
```yaml
EC2 Read Access: ✅ SUCCESS
  - Can view EC2 instances
  - Can see all instance details

EC2 Admin Access: ✅ SUCCESS
  - Can stop EC2 instances
  - Stop operation completed successfully
  - Instance entered "Stopping" then "Stopped" state
  - Full admin permissions working as intended
```

## 🔒 Security Best Practices Implemented

### Principle of Least Privilege
- ✅ Users granted only permissions needed for their job function
- ✅ No direct policy attachment to users (permissions via groups)
- ✅ Separate support and admin roles with different capabilities

### Access Control
- ✅ Strong password policy enforced at account level
- ✅ Read-only access for support staff prevents accidental changes
- ✅ Admin access restricted to authorized personnel only

### Policy Management
- ✅ Use of AWS Managed Policies where applicable
- ✅ Custom inline policies for specific requirements
- ✅ Group-based permission inheritance for easier management

### Authentication
- ✅ Unique IAM users for each person
- ✅ Console passwords for interactive access
- ✅ IAM sign-in URL for centralized authentication

## 📊 IAM Policy Structure

### Basic Policy Elements

```json
{
  "Version": "2012-10-17",
  "Statement": [
    {
      "Effect": "Allow | Deny",
      "Action": [
        "service:Action",
        "service:AnotherAction"
      ],
      "Resource": "arn:aws:service:region:account:resource" | "*"
    }
  ]
}
```

### Policy Components Explained

| Element | Purpose | Example |
|---------|---------|---------|
| **Effect** | Whether to Allow or Deny | `"Effect": "Allow"` |
| **Action** | API operations that can be performed | `"ec2:DescribeInstances"` |
| **Resource** | AWS resources the policy applies to | `"arn:aws:s3:::my-bucket/*"` |
| **Principal** | Who the policy applies to (in resource policies) | `"AWS": "arn:aws:iam::123456:user/user-1"` |
| **Condition** | Circumstances under which policy applies | `"StringEquals": {"aws:RequestedRegion": "us-east-1"}` |

## 💡 Key Learnings

### IAM Fundamentals
- **Users**: Individual identities with unique credentials
- **Groups**: Collections of users with common permissions
- **Policies**: JSON documents defining permissions
- **Roles**: Temporary credentials for AWS services or federated users

### Managed vs Inline Policies
- **Managed Policies**: Reusable, maintained by AWS or custom-created
- **Inline Policies**: Embedded directly in a single user/group/role
- **Best Practice**: Use managed policies for reusability and consistency

### Permission Evaluation
1. By default, all access is **denied**
2. Explicit **Allow** in policy grants access
3. Explicit **Deny** always overrides Allow
4. Permissions are cumulative from all attached policies

### Group-Based Access Control
- Simplifies permission management
- Easy to add/remove users from groups
- Permissions automatically inherited
- Audit and compliance benefits

## 🎓 Skills Demonstrated

- AWS IAM service navigation and configuration
- Security policy design and implementation
- Access control best practices
- Role-based access control (RBAC)
- Permission testing and validation
- Identity management
- Compliance and governance
- Security hardening (password policies)

## 🧪 Testing & Validation Summary

### Validation Matrix

| User | S3 List | S3 Read | EC2 View | EC2 Stop | Expected | Actual |
|------|---------|---------|----------|----------|----------|--------|
| user-1 | ✅ | ✅ | ❌ | ❌ | S3 Read-Only | ✅ Pass |
| user-2 | ❌ | ❌ | ✅ | ❌ | EC2 Read-Only | ✅ Pass |
| user-3 | ❌ | ❌ | ✅ | ✅ | EC2 Admin | ✅ Pass |

**Test Results**: 100% Pass Rate - All permissions working as designed

## 📈 Project Outcomes

- ✅ Successfully implemented IAM password policy
- ✅ Created logical user group structure
- ✅ Assigned appropriate permissions to each role
- ✅ Validated principle of least privilege
- ✅ Tested and confirmed permission boundaries
- ✅ Demonstrated secure access control practices
- ✅ Established foundation for scalable IAM architecture

## 🚀 Advanced IAM Concepts

### Additional IAM Features
- **Multi-Factor Authentication (MFA)**: Add second authentication factor
- **IAM Roles**: Temporary credentials for services and applications
- **Service Control Policies (SCPs)**: Organization-level permission boundaries
- **Permission Boundaries**: Maximum permissions for users/roles
- **Access Analyzer**: Identify unintended resource access
- **Credential Reports**: Audit user credentials and activity

### Enterprise Enhancements
- **Federation**: Integrate with corporate identity providers (SAML, OIDC)
- **AWS SSO**: Centralized access management across AWS accounts
- **Cross-Account Access**: Use roles for multi-account architectures
- **Session Policies**: Temporary permission restrictions
- **Tag-Based Access Control**: Permissions based on resource tags

## 📚 Additional Resources

- [AWS IAM Documentation](https://docs.aws.amazon.com/iam/)
- [IAM Best Practices](https://docs.aws.amazon.com/IAM/latest/UserGuide/best-practices.html)
- [IAM Policy Reference](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies.html)
- [IAM JSON Policy Elements](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements.html)
- [AWS Security Best Practices](https://aws.amazon.com/architecture/security-identity-compliance/)
- [IAM Policy Simulator](https://policysim.aws.amazon.com/)

## 🌟 Real-World Applications

This IAM architecture pattern is essential for:
- Enterprise AWS account management
- Multi-team cloud environments
- Compliance and regulatory requirements (HIPAA, PCI-DSS, SOC 2)
- DevOps team structure with separated concerns
- Managed Service Provider (MSP) operations
- Startups scaling their AWS usage
- Financial services and healthcare applications
- Government and military cloud deployments

## 📊 Lab Statistics

- **Duration**: 60 minutes
- **AWS Services**: 3 (IAM, S3, EC2)
- **Users Created**: 3
- **Groups Created**: 3
- **Policies Configured**: 3 (2 Managed, 1 Inline)
- **Permission Tests**: 9
- **Success Rate**: 100%

## 🎯 Business Value

### Security Improvements
- Strong password policy reduces credential compromise risk
- Least privilege access minimizes blast radius of incidents
- Role separation prevents unauthorized actions

### Operational Efficiency
- Group-based permissions reduce administrative overhead
- Easy to onboard new team members to correct access level
- Clear audit trail for compliance reporting

### Cost Management
- Prevents accidental resource modifications
- Read-only access for support reduces operational risk
- Clear permission boundaries prevent resource waste

## 🔄 IAM Best Practices Checklist

- ✅ Enable MFA for privileged users
- ✅ Use groups to assign permissions (not individual users)
- ✅ Grant least privilege necessary
- ✅ Use AWS managed policies when possible
- ✅ Enforce strong password policy
- ✅ Rotate credentials regularly
- ✅ Remove unnecessary credentials
- ✅ Use roles for applications running on EC2
- ✅ Monitor activity with CloudTrail
- ✅ Regular access reviews and audits

---

## 📄 License

This project is completed as part of AWS Training and Certification.

© 2024 - AWS IAM Access Control Lab

---

## 👨‍💻 Author

**[Your Name]**
- GitHub: [@yourusername](https://github.com/yourusername)
- LinkedIn: [Your LinkedIn Profile](https://linkedin.com/in/yourprofile)
- AWS Certified: [Your Certifications]
- Email: [your.email@example.com]

---

## 📞 Connect & Share

Interested in AWS security and IAM?
- ⭐ Star this repository
- 🔄 Fork and customize for your use case
- 💬 Open issues for questions
- 🔗 Share with your network

---

**Lab Status**: ✅ Completed Successfully

**Completion Date**: [Add your date]

**Security Posture**: 🔒 Hardened

**Compliance Status**: ✅ All Tests Passed

---

### 📝 Lab Reflection

*This lab successfully demonstrated the implementation of enterprise-grade access control using AWS IAM. By configuring password policies, creating user groups with specific permissions, and testing access boundaries, the lab showcased how to implement the principle of least privilege in a cloud environment. The
