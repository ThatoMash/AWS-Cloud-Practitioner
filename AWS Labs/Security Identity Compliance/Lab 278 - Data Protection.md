# Data Protection Using AWS KMS Encryption

## Overview

This lab demonstrates how to implement data encryption and decryption using **AWS Key Management Service (KMS)** and the **AWS Encryption CLI**. You'll learn how to protect sensitive data by transforming plaintext into ciphertext using symmetric encryption keys.


##  Objectives

After completing this lab, you will be able to:

Create an AWS KMS encryption key
 Install and configure the AWS Encryption CLI
 Encrypt plaintext files into ciphertext
  Decrypt ciphertext back to plaintext


The lab environment includes:
- **EC2 Instance**: File Server for encryption operations
- **IAM Role**: Pre-configured with necessary permissions
- **AWS KMS**: Key management service for encryption keys
- **Systems Manager**: Session Manager for secure instance access


##  Getting Started

### Task 1: Create an AWS KMS Key

1. Navigate to the **AWS KMS Console**
2. Click **Create a key**
3. Configure the key settings:
   - **Key type**: Symmetric
   - **Alias**: `MyKMSKey`
   - **Description**: Key used to encrypt and decrypt data files
4. Set key administrators and usage permissions to `voclabs`
5. Copy the **ARN** for later use
<img width="1346" height="517" alt="image" src="https://github.com/user-attachments/assets/7d9e249b-f161-4628-a997-50412d282318" />

<img width="1364" height="565" alt="image" src="https://github.com/user-attachments/assets/170012f7-d8f3-4f43-b0a9-e434d35763f7" />
<img width="1348" height="573" alt="image" src="https://github.com/user-attachments/assets/7c54998f-17e7-46ce-b420-81fec86d0c25" />
<img width="1365" height="571" alt="image" src="https://github.com/user-attachments/assets/8b0a9238-6fce-49e7-908d-ecbbd05dff32" />
<img width="1363" height="424" alt="image" src="https://github.com/user-attachments/assets/a740a21f-df04-4988-bb73-e9c09451c73a" />
<img width="1352" height="571" alt="image" src="https://github.com/user-attachments/assets/6a843726-3400-4d7e-a646-fcd8651e78e6" />


### Task 2: Configure the File Server Instance

#### Connect to the EC2 Instance

1. Navigate to **EC2 Console**
2. Select the **File Server** instance
3. Click **Connect** → **Session Manager** → **Connect**

<img width="1365" height="559" alt="image" src="https://github.com/user-attachments/assets/9c8414f6-a9b6-4685-9055-464aa81f3376" />
<img width="1365" height="575" alt="image" src="https://github.com/user-attachments/assets/45bf7990-a920-4db0-ab22-54b67be988d9" />
<img width="1358" height="400" alt="image" src="https://github.com/user-attachments/assets/2fb3bd51-c545-4061-9943-d2ad0d5c826d" />


#### Configure AWS Credentials

```bash
# Change to home directory
cd ~

# Initialize AWS configuration
aws configure
```

When prompted:
- **AWS Access Key ID**: Enter `1` (temporary placeholder)
- **AWS Secret Access Key**: Enter `1` (temporary placeholder)
- **Default region name**: Enter your lab region
- **Default output format**: Press Enter

#### Update Credentials File

```bash
# Edit credentials file
vi ~/.aws/credentials
```

Replace the contents with your actual AWS credentials from the Vocareum console.

<img width="1363" height="183" alt="image" src="https://github.com/user-attachments/assets/7b3e3488-b398-4e0b-8801-a894325770ef" />
<img width="1359" height="190" alt="image" src="https://github.com/user-attachments/assets/dedf459e-185f-489f-9f73-998cc7ea7b0e" />



#### Install AWS Encryption CLI

```bash
# Install the AWS Encryption CLI
pip3 install aws-encryption-sdk-cli

# Export the path
export PATH=$PATH:/home/ssm-user/.local/bin
```

<img width="1363" height="601" alt="image" src="https://github.com/user-attachments/assets/73ec2230-295a-42e6-8832-df1d2ef72264" />

<img width="1362" height="225" alt="image" src="https://github.com/user-attachments/assets/82448cfe-cd99-4d8c-b921-29de15be81f6" />



### Task 3: Encrypt and Decrypt Data

#### Create Test Files

```bash
# Create sample secret files
touch secret1.txt secret2.txt secret3.txt
echo 'TOP SECRET 1!!!' > secret1.txt

# View the plaintext content
cat secret1.txt
```

#### Set Up Encryption Environment

```bash
# Create output directory
mkdir output

# Set the KMS key ARN variable
keyArn=<YOUR_KMS_ARN>
```

<img width="558" height="155" alt="image" src="https://github.com/user-attachments/assets/6f19e52a-08ea-4d38-b89f-ef3c0613b40f" />


#### Encrypt the File

```bash
aws-encryption-cli --encrypt \
                     --input secret1.txt \
                     --wrapping-keys key=$keyArn \
                     --metadata-output ~/metadata \
                     --encryption-context purpose=test \
                     --commitment-policy require-encrypt-require-decrypt \
                     --output ~/output/.
```

**Command Breakdown:**
- `--encrypt`: Specifies encryption operation
- `--input`: File to encrypt
- `--wrapping-keys`: AWS KMS key to use
- `--metadata-output`: Location for operation metadata
- `--encryption-context`: Best practice for additional security
- `--commitment-policy`: Enforces key commitment security feature
- `--output`: Directory for encrypted file

#### Verify Encryption

```bash
# Check command success
echo $?  # Should return 0 for success

# View encrypted file
cd output
cat secret1.txt.encrypted
```



#### Decrypt the File

```bash
aws-encryption-cli --decrypt \
                     --input secret1.txt.encrypted \
                     --wrapping-keys key=$keyArn \
                     --commitment-policy require-encrypt-require-decrypt \
                     --encryption-context purpose=test \
                     --metadata-output ~/metadata \
                     --max-encrypted-data-keys 1 \
                     --buffer \
                     --output .
```

#### View Decrypted Content

```bash
# List files
ls

# View decrypted content
cat secret1.txt.encrypted.decrypted
```

<img width="1356" height="227" alt="image" src="https://github.com/user-attachments/assets/37c05388-e1d1-49a5-a0a8-745731b8176c" />


##  Understanding Symmetric Encryption

### Encryption Process
Symmetric encryption uses the **same key** to both encrypt and decrypt data, making it fast and efficient.



**Plaintext** → **[Symmetric Key + Algorithm]** → **Ciphertext**

### Decryption Process
The same symmetric key reverses the encryption to restore the original plaintext.



**Ciphertext** → **[Symmetric Key + Algorithm]** → **Plaintext**

##  Results

Upon successful completion, you will have:
- Created a secure AWS KMS encryption key
- Encrypted sensitive plaintext data into unreadable ciphertext
- Decrypted the ciphertext back to its original readable form
- Gained hands-on experience with AWS encryption services

##  Security Best Practices

- Always use encryption contexts for additional security
- Store KMS key ARNs securely
- Use IAM roles with least privilege access
- Enable key rotation for long-term keys
- Monitor key usage with AWS CloudTrail


- AWS for providing the KMS service and encryption tools
- The AWS Encryption SDK team for the CLI tool

---

