# EC2 Monitoring & CloudWatch Lab – README

## Lab Overview
In this lab, you will monitor an EC2 instance using Amazon CloudWatch, SNS, dashboards, and CPU stress tools.

---

# Task 1: Create an SNS Topic and Subscription

1. Go to SNS → Topics → Create Topic.
2. Type: Standard.
3. Name: MyCwAlarm.
4. Click Create.
5. Open the topic → Subscriptions → Create subscription.
6. Protocol: Email.
7. Endpoint: Your email address.
8. Confirm the subscription from your email inbox.

[PLACEHOLDER: SNS Topic & Subscription Screenshot]

---

# Task 2: Create a CloudWatch Alarm

1. Go to CloudWatch → Metrics.
2. Select EC2 → Per-Instance Metrics.
3. Choose CPUUtilization.
4. Set:
   - Statistic: Average
   - Period: 1 minute
   - Threshold: Greater than 60%
5. Add SNS notification: MyCwAlarm.
6. Name the alarm: LabCPUUtilizationAlarm.

[PLACEHOLDER: CloudWatch Alarm Screenshot]

---

# Task 3: Connect to EC2 and Install Tools

1. Connect to the EC2 instance using EC2 Instance Connect or Session Manager.
2. Install the stress tool:
   sudo yum install -y stress
3. Verify installation:
   stress --version

[PLACEHOLDER: EC2 Terminal Screenshot]

---

# Task 4: Run a CPU Stress Test

1. Run the CPU stress command:
   sudo stress --cpu 10 -v --timeout 400s
2. Optionally monitor CPU load:
   top
3. View the alarm change to "In alarm" (red) on CloudWatch.

[PLACEHOLDER: Stress Test Screenshot]

---

# Task 5: Check SNS Alarm Notification

1. Open your email inbox.
2. Look for the SNS notification email triggered by the CPU alarm.

[PLACEHOLDER: SNS Email Screenshot]

---

# Task 6: Create a CloudWatch Dashboard

1. Go to CloudWatch → Dashboards → Create dashboard.
2. Name the dashboard: LabEC2Dashboard.
3. Add a line widget.
4. Add the CPUUtilization metric.
5. Save the dashboard.

[PLACEHOLDER: Dashboard Screenshot]

---

# Task 7: Stop Stress Test and Clear Alarm

1. Stop the stress test:
   Press CTRL + C
2. Wait 2–3 minutes for CPU to drop.
3. Alarm will return to OK (green).

[PLACEHOLDER: Alarm Recovery Screenshot]

---

# Summary

- SNS topic created.
- CloudWatch alarm configured.
- Stress tool installed and executed.
- CPU alarm triggered.
- SNS email received.
- Dashboard created.
- Alarm returned to normal.

