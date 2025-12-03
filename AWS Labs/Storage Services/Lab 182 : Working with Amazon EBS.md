# AWS EBS: Working with Amazon Elastic Block Store


##  Project Overview

In this hands-on lab, I worked with Amazon Elastic Block Store (EBS) to perform a range of operations, including creating volumes, attaching them to EC2 instances, configuring file systems, managing snapshots, and practicing disaster recovery procedures. This project gave me practical experience with enterprise-grade block storage management in a cloud environment.

##  Objectives
By completing this lab, I was able to:

 Create EBS volumes with specific configurations.
 Attach EBS volumes to running EC2 instances.
 Mount and configure file systems on EBS volumes.
 Set up persistent mount configurations to ensure volumes remain accessible after reboots.
 Create EBS snapshots for backup and disaster recovery purposes.
 Restore data from EBS snapshots when needed.
 Manage multiple volumes on a single instance efficiently.
 Understand the states and lifecycle of EBS volumes.
 Implement storage redundancy and recovery strategies to protect data.

##  Architecture Overview

### EBS Volume Lifecycle and Management


STORAGE TIMELINE:
═══════════════════════════════════════════════════════════════════════
1. CREATE:    "My Volume" (1 GiB) → Attached as /dev/sdb
2. FORMAT:    ext3 filesystem created
3. MOUNT:     Mounted to /mnt/data-store
4. WRITE:     file.txt created with content
5. SNAPSHOT:  "My Snapshot" created → Stored in S3
6. DELETE:    file.txt deleted from original volume
7. RESTORE:   "Restored Volume" created from snapshot
8. ATTACH:    Restored volume attached as /dev/sdc
9. MOUNT:     Mounted to /mnt/data-store2
10. VERIFY:   file.txt recovered successfully!


##  Screenshots Documentation

### Task 1: Creating New EBS Volume

**Screenshot 1: EC2 Console Navigation**
- *Caption: Navigating to EC2 service from AWS Console*
- File: `01-ec2-console-navigation.png`

**Screenshot 2: EC2 Instances List**
-  * Caption: Viewing existing Lab instance in Instances dashboard*
- File: `02-ec2-instances-list.png`

**Screenshot 3: Lab Instance Details**
- * Caption: Lab instance showing Availability Zone (us-west-2a)*
- File: `03-lab-instance-details.png`

**Screenshot 4: Note Availability Zone**
- Caption: Highlighting Availability Zone column for reference*
- File: `04-note-availability-zone.png`

**Screenshot 5: Volumes Navigation**
- * Caption: Navigating to Elastic Block Store > Volumes*
- File: `05-volumes-navigation.png`

**Screenshot 6: Existing Root Volume**
- * Caption: Original 8 GiB root volume attached to Lab instance*
- File: `06-existing-root-volume.png`

**Screenshot 7: Create Volume Button**
- Caption: Clicking "Create volume" button*
- File: `07-create-volume-button.png`

**Screenshot 8: Volume Type Selection**
- * Caption: Selecting "General Purpose SSD (gp2)" volume type*
- File: `08-volume-type-selection.png`

**Screenshot 9: Volume Size Configuration**
- * Caption: Setting volume size to 1 GiB*
- File: `09-volume-size-config.png`

**Screenshot 10: Availability Zone Match**
- *Caption: Selecting same Availability Zone as EC2 instance (us-west-2a)*
- File: `10-availability-zone-match.png`

**Screenshot 11: Add Name Tag**
- *Caption: Adding tag with Key="Name" and Value="My Volume"*
- File: `11-add-name-tag.png`

**Screenshot 12: Volume Configuration Summary**
- *Caption: Review of volume settings before creation*
- File: `12-volume-config-summary.png`

**Screenshot 13: Create Volume Confirmation**
- *Caption: Clicking "Create volume" button*
- File: `13-create-volume-confirm.png`

**Screenshot 14: Volume Creating Status**
- *Caption: New volume showing "Creating" status*
- File: `14-volume-creating-status.png`

**Screenshot 15: Volume Available Status**
- *Caption: Volume status changed to "Available" after refresh*
- File: `15-volume-available-status.png`

### Task 2: Attaching Volume to EC2 Instance

**Screenshot 16: Select My Volume**
- *Caption: Selecting "My Volume" checkbox*
- File: `16-select-my-volume.png`

**Screenshot 17: Actions Menu - Attach**
- *Caption: Opening Actions menu and selecting "Attach volume"*
- File: `17-actions-attach-volume.png`

**Screenshot 18: Attach Volume Dialog**
- *Caption: Attach volume configuration dialog*
- File: `18-attach-volume-dialog.png`

**Screenshot 19: Select Instance**
- *Caption: Selecting "Lab" instance from dropdown*
- File: `19-select-lab-instance.png`

**Screenshot 20: Device Name Selection**
- *Caption: Choosing device name "/dev/sdb"*
- File: `20-device-name-selection.png`

**Screenshot 21: Attach Volume Button**
- *Caption: Clicking "Attach volume" button*
- File: `21-attach-volume-button.png`

**Screenshot 22: Volume In-Use Status**
- *Caption: Volume state changed to "In-use"*
- File: `22-volume-in-use-status.png`

**Screenshot 23: Volume Attachment Details**
- *Caption: Showing attachment information with instance ID*
- File: `23-volume-attachment-details.png`

### Task 3: Connecting to EC2 Instance

**Screenshot 24: Select Lab Instance**
- *Caption: Selecting Lab instance from instances list*
- File: `24-select-lab-instance.png`

**Screenshot 25: Connect Button**
- *Caption: Clicking "Connect" button for instance*
- File: `25-connect-button.png`

**Screenshot 26: EC2 Instance Connect Tab**
- *Caption: EC2 Instance Connect connection method selected*
- File: `26-ec2-instance-connect-tab.png`

**Screenshot 27: Instance Connect Details**
- *Caption: Username shown as "ec2-user"*
- File: `27-instance-connect-details.png`

**Screenshot 28: Connect to Instance**
- *Caption: Clicking "Connect" button to establish connection*
- File: `28-connect-to-instance.png`

**Screenshot 29: Terminal Window**
- *Caption: EC2 Instance Connect terminal window opened*
- File: `29-terminal-window.png`

**Screenshot 30: Terminal Prompt**
- *Caption: Terminal showing ec2-user@ip prompt*
- File: `30-terminal-prompt.png`

### Task 4: Creating and Configuring File System

**Screenshot 31: Check Current Storage**
- *Caption: Running 'df -h' command to view current storage*
- File: `31-check-current-storage.png`

**Screenshot 32: Storage Output Before**
- *Caption: Original 8 GB disk volume shown, new volume not yet visible*
- File: `32-storage-output-before.png`

**Screenshot 33: Create ext3 Filesystem**
- *Caption: Running 'sudo mkfs -t ext3 /dev/sdb' command*
- File: `33-create-ext3-filesystem.png`

**Screenshot 34: Filesystem Creation Output**
- *Caption: ext3 filesystem successfully created on /dev/sdb*
- File: `34-filesystem-creation-output.png`

**Screenshot 35: Create Mount Directory**
- *Caption: Running 'sudo mkdir /mnt/data-store' command*
- File: `35-create-mount-directory.png`

**Screenshot 36: Mount Volume Command**
- *Caption: Running 'sudo mount /dev/sdb /mnt/data-store' command*
- File: `36-mount-volume-command.png`

**Screenshot 37: Update fstab**
- *Caption: Adding persistent mount entry to /etc/fstab*
- File: `37-update-fstab.png`

**Screenshot 38: View fstab Configuration**
- *Caption: Running 'cat /etc/fstab' to verify mount configuration*
- File: `38-view-fstab-config.png`

**Screenshot 39: fstab Entry**
- *Caption: New mount entry visible in fstab file*
- File: `39-fstab-entry.png`

**Screenshot 40: Check Storage After Mount**
- *Caption: Running 'df -h' again to see mounted volume*
- File: `40-check-storage-after.png`

**Screenshot 41: New Volume Visible**
- *Caption: /dev/nvme1n1 showing as mounted at /mnt/data-store*
- File: `41-new-volume-visible.png`

**Screenshot 42: Create Test File**
- *Caption: Writing "some text has been written" to file.txt*
- File: `42-create-test-file.png`

**Screenshot 43: Verify File Contents**
- *Caption: Running 'cat /mnt/data-store/file.txt' to verify*
- File: `43-verify-file-contents.png`

**Screenshot 44: File Content Output**
- *Caption: "some text has been written" displayed successfully*
- File: `44-file-content-output.png`

### Task 5: Creating EBS Snapshot

**Screenshot 45: Select My Volume for Snapshot**
- *Caption: Selecting "My Volume" from volumes list*
- File: `45-select-volume-snapshot.png`

**Screenshot 46: Actions - Create Snapshot**
- *Caption: Opening Actions menu and selecting "Create snapshot"*
- File: `46-actions-create-snapshot.png`

**Screenshot 47: Create Snapshot Dialog**
- *Caption: Create snapshot configuration screen*
- File: `47-create-snapshot-dialog.png`

**Screenshot 48: Add Snapshot Tag**
- *Caption: Adding tag with Key="Name" and Value="My Snapshot"*
- File: `48-add-snapshot-tag.png`

**Screenshot 49: Create Snapshot Button**
- *Caption: Clicking "Create snapshot" button*
- File: `49-create-snapshot-button.png`

**Screenshot 50: Snapshot Creation Started**
- *Caption: Success message showing snapshot creation initiated*
- File: `50-snapshot-creation-started.png`

**Screenshot 51: Navigate to Snapshots**
- *Caption: Navigating to Snapshots section in left panel*
- File: `51-navigate-to-snapshots.png`

**Screenshot 52: Snapshot Pending Status**
- *Caption: "My Snapshot" showing "Pending" status*
- File: `52-snapshot-pending-status.png`

**Screenshot 53: Snapshot Progress**
- *Caption: Snapshot progress indicator showing completion percentage*
- File: `53-snapshot-progress.png`

**Screenshot 54: Snapshot Completed**
- *Caption: Snapshot status changed to "Completed"*
- File: `54-snapshot-completed.png`

**Screenshot 55: Delete Test File**
- *Caption: Running 'sudo rm /mnt/data-store/file.txt' command*
- File: `55-delete-test-file.png`

**Screenshot 56: Verify File Deletion**
- *Caption: Running 'ls' command showing file not found error*
- File: `56-verify-file-deletion.png`

**Screenshot 57: File Deleted Confirmation**
- *Caption: "No such file or directory" message confirming deletion*
- File: `57-file-deleted-confirm.png`

### Task 6: Restoring EBS Snapshot

#### Task 6.1: Create Volume from Snapshot

**Screenshot 58: Select My Snapshot**
- *Caption: Selecting "My Snapshot" from snapshots list*
- File: `58-select-my-snapshot.png`

**Screenshot 59: Actions - Create Volume**
- *Caption: Selecting "Create volume from snapshot" from Actions menu*
- File: `59-actions-create-volume.png`

**Screenshot 60: Create Volume from Snapshot**
- *Caption: Create volume configuration pre-filled from snapshot*
- File: `60-create-volume-from-snapshot.png`

**Screenshot 61: Match Availability Zone**
- *Caption: Selecting same Availability Zone (us-west-2a)*
- File: `61-match-availability-zone.png`

**Screenshot 62: Add Restored Volume Tag**
- *Caption: Adding tag with Key="Name" and Value="Restored Volume"*
- File: `62-add-restored-volume-tag.png`

**Screenshot 63: Create Restored Volume**
- *Caption: Clicking "Create volume" button*
- File: `63-create-restored-volume.png`

**Screenshot 64: Navigate to Volumes**
- *Caption: Going back to Volumes section*
- File: `64-navigate-to-volumes.png`

**Screenshot 65: Restored Volume Available**
- *Caption: "Restored Volume" showing "Available" status*
- File: `65-restored-volume-available.png`

#### Task 6.2: Attach Restored Volume

**Screenshot 66: Select Restored Volume**
- *Caption: Selecting "Restored Volume" checkbox*
- File: `66-select-restored-volume.png`

**Screenshot 67: Attach Restored Volume**
- *Caption: Selecting "Attach volume" from Actions menu*
- File: `67-attach-restored-volume.png`

**Screenshot 68: Select Lab Instance Again**
- *Caption: Choosing "Lab" instance from dropdown*
- File: `68-select-lab-instance-again.png`

**Screenshot 69: Device Name /dev/sdc**
- *Caption: Selecting device name "/dev/sdc" (different from first volume)*
- File: `69-device-name-sdc.png`

**Screenshot 70: Attach Second Volume**
- *Caption: Clicking "Attach volume" button*
- File: `70-attach-second-volume.png`

**Screenshot 71: Restored Volume In-Use**
- *Caption: Restored volume status now "In-use"*
- File: `71-restored-volume-in-use.png`

**Screenshot 72: Multiple Volumes Attached**
- *Caption: Volumes list showing both volumes attached to Lab instance*
- File: `72-multiple-volumes-attached.png`

#### Task 6.3: Mount Restored Volume

**Screenshot 73: Create Second Mount Point**
- *Caption: Running 'sudo mkdir /mnt/data-store2' command*
- File: `73-create-second-mount-point.png`

**Screenshot 74: Mount Restored Volume**
- *Caption: Running 'sudo mount /dev/sdc /mnt/data-store2' command*
- File: `74-mount-restored-volume.png`

**Screenshot 75: List Restored Files**
- *Caption: Running 'ls /mnt/data-store2/file.txt' command*
- File: `75-list-restored-files.png`

**Screenshot 76: File Restored Successfully**
- *Caption: file.txt found in restored volume!*
- File: `76-file-restored-success.png`

**Screenshot 77: Read Restored File**
- *Caption: Running 'cat /mnt/data-store2/file.txt' command*
- File: `77-read-restored-file.png`

**Screenshot 78: Original Content Verified**
- *Caption: "some text has been written" content successfully restored*
- File: `78-original-content-verified.png`

**Screenshot 79: Final Storage Overview**
- *Caption: Running 'df -h' showing all mounted volumes*
- File: `79-final-storage-overview.png`

**Screenshot 80: Three Volumes Mounted**
- *Caption: Root volume, My Volume, and Restored Volume all visible*
- File: `80-three-volumes-mounted.png`

## 🛠️ Technologies Used

- **Amazon EBS** - Elastic Block Store for persistent storage
- **Amazon EC2** - Elastic Compute Cloud instances
- **Amazon S3** - Backend storage for EBS snapshots
- **Linux ext3** - Filesystem format
- **EC2 Instance Connect** - Browser-based SSH access
- **AWS Management Console** - Web interface for resource management
- **Linux Commands** - df, mkfs, mount, cat, ls, rm

## 📝 Detailed Implementation

### Task 1: EBS Volume Creation

```yaml
Volume Configuration:
  Name: My Volume
  Type: General Purpose SSD (gp2)
  Size: 1 GiB
  Availability Zone: us-west-2a (same as EC2 instance)
  IOPS: Baseline 100 IOPS (gp2 standard)
  Throughput: Up to 128 MiB/s
  Encryption: Default (not encrypted in this lab)
  
Status Lifecycle:
  1. Creating → Initial state after creation request
  2. Available → Volume ready for attachment
  3. In-use → Volume attached to EC2 instance
```

**Important Considerations:**
- Volume must be in same Availability Zone as EC2 instance
- Cannot attach volumes across AZs
- gp2 volumes provide baseline performance
- Volume size can be increased later (but not decreased)

### Task 2: Volume Attachment

```bash
# Device naming convention
Requested Device: /dev/sdb
Actual Device (NVMe): /dev/nvme1n1

# AWS automatically maps traditional names to NVMe names
# for Nitro-based instances
```

**Attachment States:**
```yaml
Attachment States:
  attaching: Volume being attached to instance
  attached: Volume successfully attached
  detaching: Volume being detached
  detached: Volume removed from instance
  
Device Identifiers:
  /dev/sdb  → Traditional naming (used in commands)
  /dev/nvme1n1 → Actual NVMe device name
```

### Task 3: EC2 Instance Connect

```yaml
Connection Method: EC2 Instance Connect
Benefits:
  - No SSH key pairs needed
  - Browser-based access
  - IAM-controlled access
  - Audit trail in CloudTrail
  - Temporary credentials
  
Alternative Methods:
  - SSH with key pair
  - AWS Systems Manager Session Manager
  - AWS Systems Manager Run Command
```

### Task 4: File System Configuration

#### Step-by-Step Commands

**1. Check Current Storage**
```bash
df -h
```

**Expected Output (Before):**
```
Filesystem      Size  Used Avail Use% Mounted on
/dev/nvme0n1p1  8.0G  1.7G  6.4G  21% /
devtmpfs        464M     0  464M   0% /dev
tmpfs           473M     0  473M   0% /dev/shm
```

**2. Create ext3 Filesystem**
```bash
sudo mkfs -t ext3 /dev/sdb
```

**Output:**
```
mke2fs 1.42.9 (28-Dec-2013)
Filesystem label=
OS type: Linux
Block size=4096 (log=2)
Fragment size=4096 (log=2)
Stride=0 blocks, Stripe width=0 blocks
65536 inodes, 262144 blocks
...
Writing superblocks and filesystem accounting information: done
```

**3. Create Mount Point**
```bash
sudo mkdir /mnt/data-store
```

**4. Mount Volume**
```bash
sudo mount /dev/sdb /mnt/data-store
```

**5. Make Mount Persistent**
```bash
echo "/dev/sdb   /mnt/data-store ext3 defaults,noatime 1 2" | sudo tee -a /etc/fstab
```

**/etc/fstab Entry Explained:**
```
/dev/sdb              → Device to mount
/mnt/data-store       → Mount point
ext3                  → Filesystem type
defaults,noatime      → Mount options
1                     → Dump frequency (backup)
2                     → fsck pass number (filesystem check order)
```

**6. Verify Mount**
```bash
df -h
```

**Expected Output (After):**
```
Filesystem      Size  Used Avail Use% Mounted on
/dev/nvme0n1p1  8.0G  1.7G  6.4G  21% /
/dev/nvme1n1    975M   60K  924M   1% /mnt/data-store  ← New volume!
```

**7. Create Test File**
```bash
sudo sh -c "echo some text has been written > /mnt/data-store/file.txt"
```

**8. Verify File**
```bash
cat /mnt/data-store/file.txt
# Output: some text has been written
```

### Task 5: EBS Snapshot Creation

```yaml
Snapshot Configuration:
  Name: My Snapshot
  Source Volume: My Volume (1 GiB)
  Storage: Amazon S3 (managed by AWS)
  Type: Incremental backup
  
Snapshot Characteristics:
  - Only used blocks are copied (not empty space)
  - First snapshot is full backup
  - Subsequent snapshots are incremental
  - Stored in S3 for durability (11 9's)
  - Can be copied across regions
  - Can be shared across accounts
  
Status Lifecycle:
  pending → Snapshot being created
  completed → Snapshot ready for use
```

**Snapshot Storage Efficiency:**
```
Volume Size: 1 GiB
Used Space: ~60 KB
Snapshot Size: ~60 KB (only used blocks backed up)
Empty Space: NOT backed up (saves storage costs)
```

**Delete Test File:**
```bash
# Simulate data loss
sudo rm /mnt/data-store/file.txt

# Verify deletion
ls /mnt/data-store/file.txt
# Output: ls: cannot access /mnt/data-store/file.txt: No such file or directory
```

### Task 6: Snapshot Restoration

#### Task 6.1: Create Volume from Snapshot

```yaml
Restored Volume Configuration:
  Name: Restored Volume
  Source: My Snapshot
  Type: gp2 (inherited from snapshot)
  Size: 1 GiB (inherited, but can be increased)
  Availability Zone: us-west-2a (must specify)
  
Restoration Options:
  - Can increase size during restoration
  - Can change volume type (e.g., gp2 to gp3)
  - Can change encryption settings
  - Can restore to different AZ
  - Cannot decrease size
```

#### Task 6.2: Attach Restored Volume

```bash
# Second volume uses different device identifier
Device: /dev/sdc → /dev/nvme2n1

# Multiple volumes can be attached to same instance
Instance Volumes:
  - /dev/nvme0n1 → Root volume (8 GiB)
  - /dev/nvme1n1 → My Volume (1 GiB)
  - /dev/nvme2n1 → Restored Volume (1 GiB)
```

#### Task 6.3: Mount and Verify

```bash
# Create second mount point
sudo mkdir /mnt/data-store2

# Mount restored volume
sudo mount /dev/sdc /mnt/data-store2

# Verify restored file exists
ls /mnt/data-store2/file.txt
# Output: /mnt/data-store2/file.txt  ← File recovered!

# Read restored content
cat /mnt/data-store2/file.txt
# Output: some text has been written  ← Original content restored!
```

**Final Storage Configuration:**
```bash
df -h
```

**Output:**
```
Filesystem      Size  Used Avail Use% Mounted on
/dev/nvme0n1p1  8.0G  1.7G  6.4G  21% /                ← Root
/dev/nvme1n1    975M   60K  924M   1% /mnt/data-store  ← Original (file deleted)
/dev/nvme2n1    975M   60K  924M   1% /mnt/data-store2 ← Restored (file present)
```

## 📊 EBS Volume Types Comparison

| Type | Use Case | IOPS | Throughput | Size Range |
|------|----------|------|------------|------------|
| **gp3** | General purpose | 3,000-16,000 | 125-1,000 MB/s | 1 GiB - 16 TiB |
| **gp2** | General purpose | 100-16,000 | Up to 250 MB/s | 1 GiB - 16 TiB |
| **io2** | Mission-critical | 100-64,000 | Up to 1,000 MB/s | 4 GiB - 16 TiB |
| **io1** | High performance | 100-64,000 | Up to 1,000 MB/s | 4 GiB - 16 TiB |
| **st1** | Big data | 500 (max) | Up to 500 MB/s | 125 GiB - 16 TiB |
| **sc1** | Cold storage | 250 (max) | Up to 250 MB/s | 125 GiB - 16 TiB |

## 🔍 EBS vs Other Storage Types

| Feature | EBS | Instance Store | EFS | S3 |
|---------|-----|----------------|-----|-----|
| **Persistence** | Yes
