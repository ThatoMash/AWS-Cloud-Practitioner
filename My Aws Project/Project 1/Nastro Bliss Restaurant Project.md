# Nastro Bliss Restaurant Website & AWS Deployment Demonstration

<img width="428" height="418" alt="image" src="https://github.com/user-attachments/assets/5a650d7b-480f-4dc4-8e1b-8e751e21c8e0" />


## Introduction
This project demonstrates the development of a **static website for Nastro Bliss**, a contemporary African cuisine restaurant based in Johannesburg.  
The goal is to improve customer interactions by providing an online platform for menu browsing, booking reservations, and submitting orders. Additionally, this project showcases the benefits of hosting on **AWS**, emphasizing reliability, cost-effectiveness, and operational efficiency.

By building this project, we explore key AWS services such as **S3, Route 53, CloudFront, IAM, and SES**, demonstrating a practical example of cloud migration benefits for small businesses.

---

## Restaurant Overview: Nastro Bliss
Nastro Bliss is a beloved local restaurant specializing in grill and fire menu items. It serves local residents, corporate clients, and tourists looking to experience contemporary African cuisine.  

### Current Operational Challenges
- **Booking Confusion**: Reservations through phone, walk-ins, or social media often get lost or double-booked.  
- **Order Mix-ups**: Orders placed verbally or via text frequently lead to incorrect items or forgotten requests.  
- **No Digital Presence**: Without an organized online platform, customers cannot easily access menus, hours, or availability.

### Business Impact
| Metric | Impact |
|--------|--------|
| Lost Revenue | Customers turn to competitors with better online booking systems (~30%) |
| Staff Time Wasted | Hours spent managing manual bookings and resolving order errors (~40%) |
| Customer Satisfaction | Negative reviews from booking mix-ups and incorrect orders (~25%) |

---

## Project Deliverables

### Static Website
- Fully functional static website hosted on **AWS S3**
- Key features:
  - Home Page
  - Menu Page
  - Booking Page
  - Order Submission Form
  - Confirmation Page  

**Visual placeholders:**
- ![Website Home Page Placeholder](#)  
- ![Menu Page Placeholder](#)  
- ![Booking Form Screenshot Placeholder](#)  

### AWS Migration Presentation
- Slides covering:
  - Restaurant overview
  - Challenges and impact
  - Proposed AWS solution
  - Cost analysis
  - Benefits of migration  

**Visual placeholders:**
- ![Architecture Diagram Placeholder](#)  
- ![Slide Screenshot Placeholder](#)

---

## Website Development Highlights

### Design & User Experience
- Clean and intuitive interface  
- Minimal colours for readability  
- Incorporates images, videos, and simple animations for engagement  
- Example: ![Website Preview Placeholder](#)

### Functionality
- Centralized **online booking system** with instant confirmation  
- Digital menu & online ordering capabilities  
- Real-time updates for hours, location, and availability  
- Hosted images stored in **Amazon S3**  

---

## AWS Implementation

### Services Used
| Requirement | AWS Service | Purpose |
|-------------|------------|---------|
| Host website | S3 | Static website hosting & image storage |
| Domain management | Route 53 | Custom domain setup |
| Content delivery | CloudFront | Faster load times worldwide |
| Access control | IAM | Security and access management |
| Email notifications | SES | Optional email confirmations and notifications |

### Estimated Monthly Costs
| Service | Cost |
|---------|------|
| S3 | R818–854 |
| Route 53 | R8.75/month + R210/year domain registration |
| CloudFront | R35 |
| SES | < R17.50 for first 1,000 emails |
| **Total** | ~R175/month |

### Security & Reliability
- **Data Protection**: AWS provides high-level security to protect customer data.  
- **Compliance Ready**: Infrastructure follows best practices for data handling.  
- **Automatic Backups**: Customer reservations and orders are safely backed up.

---

## Project Structure
