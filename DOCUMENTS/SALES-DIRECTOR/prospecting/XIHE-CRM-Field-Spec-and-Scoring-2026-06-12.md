# XIHE CRM Field Spec and Scoring

Date: 2026-06-12

## Purpose

Define the CRM fields needed for XIHE's revenue intelligence workflow.

The CRM should not only store contacts.
It should classify accounts, explain buying intent, and support outreach prioritization.

## Required Account Fields

### Identity

- account_name
- website
- geography
- segment
- account_type

### Intelligence

- keyword_cluster
- buyer_type
- business_model
- facility_stage
- buying_trigger
- pain_point
- economic_justification
- product_fit
- outreach_angle

### Execution

- fit_score
- priority_level
- owner
- next_action
- follow_up_date
- status

## Suggested Controlled Values

### Segment

- PT / Sports Rehab
- Recovery Center
- Wellness Center
- Longevity / Biohacking
- Facility Buildout
- Veterinary / Pet Wellness
- OEM / Integration

### Business Model

- Insurance
- Cash Pay
- Hybrid
- Membership
- Premium Wellness
- OEM

### Facility Stage

- Concept
- Pre-Opening
- Buildout
- Operating
- Expansion
- Renovation

### Buying Trigger

- New Facility
- Expansion
- Renovation
- Membership Launch
- Cash-Pay Pivot
- Insurance Pressure
- Return-to-Play Demand
- Pet Wellness Launch
- Veterinary Expansion
- Premium Experience Upgrade

### Buyer Type

- Facility Owner
- Clinic Owner
- PT Clinic Owner
- Rehab Director
- Performance Director
- Clinic Administrator
- Operations Lead
- Procurement Officer
- Veterinary Owner

### Product Fit

- Built-in Recovery Suite
- Recovery Mat
- Recovery Nest
- Recovery Cabin
- Recovery Environment
- Pet Recovery Line
- OEM Module

## Fit Score Rubric

Start from 0 and add points for positive signals.

### High-value signals

- Cash Pay: +20
- Membership: +15
- New Facility: +20
- Expansion: +15
- Recovery Suite language: +20
- PEMF already present: +10
- Premium Wellness positioning: +10
- Return-to-Play focus: +10
- Pet Wellness expansion: +10

### Medium-value signals

- Hybrid model: +8
- Operating but upgrading: +8
- Revenue diversification language: +10
- Performance or outcomes language: +8

### Negative signals

- generic consumer wellness only: -20
- no facility signal: -15
- no business model signal: -15
- low-intent language: -10

### Scoring Buckets

- 85-100: Hot Lead
- 60-84: Warm Lead
- 40-59: Nurture Lead
- below 40: Cold Lead

## Buying Trigger to Outreach Angle Mapping

### New Facility

- Angle: planning audit, layout optimization, recovery suite ROI

### Expansion

- Angle: premium add-on, footprint efficiency, differentiated service line

### Renovation

- Angle: upgrade existing room into a higher-value recovery environment

### Membership Launch

- Angle: member retention, premium recovery experience, add-on revenue

### Cash-Pay Pivot

- Angle: non-insurance revenue, higher visit value, better margin

### Insurance Pressure

- Angle: revenue diversification and low-labor recovery support

### Return-to-Play Demand

- Angle: performance recovery workflow and faster athlete throughput

### Pet Wellness Launch

- Angle: comfort-first recovery environment for premium pet services

### Veterinary Expansion

- Angle: new non-invasive service line and premium animal recovery offer

## Knowledge Mapping Notes

Before writing the outreach angle, the CRM should allow a short note for:

- Pain Point
- Biology Layer
- Research Layer
- Application Layer
- Product Layer

This is how XIHE connects science to business value.

## Economic Justification Notes

Every strong account should include one or more of the following:

- higher revenue per square foot
- premium membership upsell
- lower therapist labor per session
- new cash-pay service line
- differentiation in a commoditized market

## Recommended CRM Views

- Hot Leads
- Buildout Accounts
- Cash Pay Accounts
- Return-to-Play Accounts
- Pet Recovery Accounts
- Nurture Accounts

## Operating Rule

The CRM should answer three questions instantly:

1. Who is this account?
2. Why would they buy now?
3. What is the best XIHE angle?

