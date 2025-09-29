---
title: About Me
createTime: 2025/03/28 12:49:34
permalink: /about/
cover: /images/specht-labs-rounded.png
---

## Hi, I'm Cedric

Most people know me as **cedi**.

I'm a **Staff Site Reliability Engineer and Technical Lead** at [Celonis](https://www.celonis.com), where I focus on building resilient distributed systems that scale.

<!-- markdownlint-disable MD033 -->
<CardGrid>
<ImageCard image="https://avatars.githubusercontent.com/u/1952599?v=4" />
<Card>

I specialize in building and maintaining **large scale distributed systems** that serve hundreds of millions of users, with deep expertise in chaos engineering, observability, and resilience testing. My passion lies in making systems more reliable, teams more effective, and turning incidents into learning opportunities.

With **13 years** of experience in Software Engineering and Site Reliability Engineering, I've designed and operated **distributed systems at global scale** (across millions of servers), led critical infrastructure migrations for major cloud platforms, and built reliability practices that have become organizational standards at companies like Microsoft Azure.

</Card>
</CardGrid>

<LinkCard title="Download my CV" icon="pepicons-pencil:cv" href="/assets/Cedric_Specht.pdf"/>
<!-- markdownlint-enable MD033 -->

## What I Do

### Technical Leadership & Systems Design

- Build and maintain **hyperscale distributed systems** serving hundreds of millions of users with focus on **resilience, SLOs, and automation**
- Lead cross-functional teams and set technical direction in high-stakes, mission-critical environments
- Design and implement **reliability engineering practices** including chaos engineering, observability, and automation across enterprise infrastructure

### Community & Advocacy

#### Conference Speaking

Regular speaker at technology conferences on SRE, observability, and Kubernetes topics. Recent talks include:

- **[Site Reliability Engineering Explained](https://media.ccc.de/v/gpn21-48-site-reliability-engineering-explained-an-exploration-of-devops-platform-engineering-and-sre)** - Exploring DevOps vs Platform Engineering vs SRE
- **[Modern Observability with LGTM Stack](https://media.ccc.de/v/gpn21-47-modern-observability-scalable-observability-with-the-lgtm-stack-harnessing-the-power-of-loki-grafana-tempo-and-mimir)** - Scalable observability architecture
- **[Understanding Alerting](https://media.ccc.de/v/gpn20-22-understanding-alerting-how-to-come-up-with-a-good-enough-alerting-strategy)** - Building effective alerting strategies

#### Open Source & Community

- Active contributor to **[SpechtLabs](https://github.com/specht-labs)**, **[Compute Blade Community](https://github.com/compute-blade-community)**, and **[SierraSoftworks](https://github.com/SierraSoftworks)** projects
- Help organize infrastructure for events like **Chaos Communication Congress**
- Regular technical conference speaker and community contributor

## Personal Projects & Interests

### Home Lab & Tinkering

- **14 Raspberry Pi cluster** (6× Pi5, 4× Pi4, 4× CM4) running K3s
- **CEPH distributed storage** for hands-on distributed systems experience
- **Stratum 1 NTP/PTP time server** for precision timing
- **Cluster API** managed cloud Kubernetes running full **Grafana LGTM stack**
- **Advanced chaos engineering** experiments across the cluster

### Analog Photography

When I'm not writing YAML, I'm a hobbyist **analog photographer** with a collection of 35mm and medium format cameras (Leica M6, Hasselblad 500 c/m, Canon A1). I develop film at home in my tiny darkroom with a 35mm enlarger.

## Engineering Philosophy

::: tip Core Principle
**Be excellent to each other** 🤝
:::

::: note Focus Areas

- Focus on **fundamentals** over chasing hype
- Alert on **symptoms**, not vitals
- **Incidents are learning opportunities**
- There is no single "root cause"
:::

::: details Essential Reading & Frameworks

- [How Complex Systems Fail](https://how.complexsystems.fail) is required reading
- System architecture exists mostly **in your head** and fails differently than expected
- Recommend the [Above/Below the Line framework](https://snafucatchers.github.io/#2_3_The_above-the-line/below-the-line_framework) for incident analysis
:::

## Let's Connect

[![GitHub Specht Labs](https://img.shields.io/badge/SpechtLabs-008080?style=for-the-badge&logo=github&logoColor=white)](https://github.com/specht-labs)
[![Mastodon](https://img.shields.io/badge/Mastodon-6364FF?style=for-the-badge&logo=mastodon&logoColor=white)](http://hachyderm.io/@cedi)
[![Instagram](https://img.shields.io/badge/Instagram-E4405F?style=for-the-badge&logo=instagram&logoColor=white)](https://instagram.com/c3di1)
[![LinkedIn](https://img.shields.io/badge/LinkedIn-0077B5?style=for-the-badge&logoColor=white)](https://www.linkedin.com/in/cekienzl)

## Experiences

:::: timeline

- Staff Site Reliability Engineer - Celonis
  time=10/2025 type=important card=true

- Lead Site Reliability Engineer - Databricks (neon.tech)
  time=06/2025 to 09/2025 type=tip

  Joined the neon.tech team just days before the acquisition by Databricks to lead a team of 7 engineers with a diverse skillset across reliability and infrastructure engineering during the post-acquisition integration of Neon into Databricks. Driving organisational change, technical migration, and strategic alignment with Databricks' mature platform ecosystem. Representing operational and infrastructure needs in cross-functional leadership forums to ensure stability, maintainability, and clear team purpose during the transition.

  ::: collapse
  - Details
    - **Designing and leading the organisational split** of the former Neon SRE/Infra team into two focused teams (Infrastructure & Production Engineering), defining roles, responsibilities, and ownership boundaries for improved execution and clarity within the new Databricks organisation.
    - **Conducting regular 1:1s** to gather team preferences and concerns, feeding into a team charter and structure aligned with individual growth paths and company needs.
    - **Authoring a detailed integration plan** and design documents covering migration of observability, GitHub infrastructure, and ZTNA access to existing Databricks solutions, ensuring a successful integration into Databricks.
    - **Creation, maintenance and prioritisation** of an infrastructure tech debt backlog to ensure focused improvements during the migration phase and beyond.
  :::

- Senior Site Reliability Engineer / Technical Lead - Microsoft Azure
  time=02/2022 to 05/2025 type=tip

  Technical Lead in Azure's Safe Change infrastructure SRE Team, responsible for chaos engineering, resiliency validation, and release infrastructure Harmonisation: Led the modernisation of Azure's release infrastructure, migrating 60+ repositories and 600+ pipelines, increasing deployment reliability and speed across multiple critical customer-facing services including, among others, Azure Cosmos DB, Log Analytics, Web Apps & Function Apps.

  ::: collapse
  - Details
    - **Platorm Engineering & DevOps Expertise:** Developed Platform tooling improvements to streamline engineering workflows and improve developer experience and led shift-left initiatives, integrating early validation mechanisms to catch issues earlier in the development lifecycle.
    - **Chaos Engineering & Resilience Validation:** Designed and implemented Chaos Engineering experiments to validate system failure hypotheses covering 80% of high-impact critical customer scenarios and improve resilience strategies and built synthetic monitoring and business validation testing to proactively identify and mitigate reliability risks.
    - **Organised multiple internal learning sessions**, developing a 9-part self-guided onboarding tutorial as part of the SRE Academy, enabling new engineers to onboard 75% faster to the new release system.
    - **Leadership and Team Management:** Technical lead & Scrum Master for my immediate team of 5 engineers, responsible for setting technical direction, mentoring, and defining strategies and goals for the team as well as the broader department, serving as the technical lead for a newly formed team within the Safe Change Infrastructure SRE organisation, and supporting to multiple program managers and teams from across three other SRE organisations in bootstrapping new SRE engagements.
    - **Cross-Org Collaboration and Stakeholder Engagement:** Partnered with 10+ service teams across Azure to help them migrate to the new release system, contributing high-quality pull requests to their repositories as best-practice examples driving down change related outages by 20%.
    - **SRE Best Practices an Knowledge Sharing:** Core Contributor & Commimee Member for the Azure SRE Playbook, authoring a new SRE patterns with 3 sub-patterns and overseeing the review and integration of 3 additional major patterns.
    - **Technical Evangelism & Internal Training:** Speaker at Azure SRE Tech Talks, delivering sessions on reliability, deployment strategies, and Platform engineering.
    - **Maintained and expanded the Azure SRE Wiki**, working across all SRE organisations to standardise and document operational excellence.
    - **Recognition & Awards:** Azure Reliability Quality Star – Leadership Excellence Award for sustained high-quality contributions to Azure's engineering culture and reliability improvements
  :::

- Tech-lead Manager Kubernetes SRE - German Edge Cloud
  time=07/2020 to 01/2022 type=tip

  Built and led the Kubernetes SRE Team: Established and scaled a remote team from two to 6 highly skilled SREs, taking full ownership of the company's Managed Kubernetes Platform, spread across 3 availability zones and hosting 50+ customer clusters. Ensured only high-quality changes made it into production by reviewing code, design documents, and architecture changes daily, implementing state of the art GitOps tooling and observability, resulting in a 75% reduction in change related outages over 12 months.

  ::: collapse
  - Details
    - **Incident & Change Management:** Developed and implemented new incident, change, and problem management processes, improving reliability and operational eﬃciency, enabling an average 10 minute time-to-engage and reducing time-to-mitigation by several hours on average through more streamlined and eﬃcient incident management processes and standard operating procedures.
    - **Cross-Functional Collaboration:** Worked closely with the Service Management team to improve incident response, change reviews, and operational excellence as well as the Infrastructure, OpenStack, and CEPH Storage teams, ensuring seamless integration and optimised performance across compute, storage, and networking layers resulting in 10% increased storage throughput and decrease in etcd commit latencies driving customer satisfaction.
    - **Platform & Product Leadership:** Took on the Product and Platform Owner role, shielding the team from unnecessary business complexity while aligning priorities with company strategy and CTO directives.
    - **Financial Oversight & Cost Optimisation:** Managed the budget for the Managed Kubernetes Service, including forecasting infrastructure costs and collaborating with accounting on financial planning.
    - **Sales & Pricing Strategy:** Worked with Sales and Finance leadership to define a competitive pricing structure for the Kubernetes oﬀering.
    - **Cloud-Native & Open Source Advocacy:** Fostered a culture of open-source collaboration, contributing improvements back to the cloud-native community and positioning the company's oﬀerings within CNCF certification programs.

  :::

- Site Reliability Engineer 2, SharePoint Online - Microsoft
  time=01/2019 to 03/2020 type=tip

  Running Live-Site operations for one of the largest M365 services with over 200 million monthly active users and over 1 exabyte of data, including incident response and management, rapidly diagnosing and resolving critical issues to maintain SharePoint Online's 99,99% SLA.

  ::: collapse
  - Details

    - **Disaster Recovery & Infrastructure Modernisation:** Led an initiative to improve disaster recovery playbooks using a more resilient storage solution, ensuring recovery procedures remained accessible even during blackout scenarios.
    - **Onboarding & Global Expansion:** Played a key role in onboarding and training a new SRE team in China, enabling 24/7 follow-the-sun operations.
    - **Community & Knowledge Sharing:** Organised meet-ups for MicrosoK Ireland's Open Source Club

  :::

- Software Engineer, Network Security - Sophos
  time=01/2017 to 12/2018 type=tip

  ::: collapse
  - Details
    - **Network Security & Threat Detection:** Worked on the Synchronised Security Engine, significantly improving network threat detec;on rates compared to competing vendors.
    - **IPSec & Network Protocol Implementation:** Worked on the implementation of IPsec IKEv2 in the Linux Kernel for the Firewall Appliance
    - **Scalability & Load Testing:** Implemented extensive firewall load testing using the Ixia BreakingPoint plaAorm, ensuring performance under high traﬃc loads. Developed custom load-testing frameworks with Python Mininet SDN, simulating concurrent user traﬃc.
    - **Testing & Release Acceleration:** Expanded the integration test suite for firewall products, leading to faster and more reliable release cycles.

  :::

- Software Engineer - MARKANT Handels and Service GmbH
  time=08/2015 to 12/2016 type=tip

  ::: collapse
  - Details
    - **Infrastructure Modernisation:** Led a department-wide initiative migrating from CVS to Git, upgrading IDE versions, and implementing a CI/CD pipeline for improved development workflows, increasing deployment velocity from once a week to multiple times a day.
    - **Operational Support Tooling:** Built custom tools to assist operations teams, enhancing incident response times in highly time-sensitive trading systems.
    - **Mentorship & Training:** Trained apprentices and junior engineers in soKware architecture, clean code principles, and design pamerns.

  :::

- Junior Software Engineer, Streit Datentechnik GmbH
  time=09/2012 to 07/2015 type=tip

  ::: collapse
  - Details
    - **Software Development:** Learned MS Visual C++, C# .NET, MS T-SQL, MFC, and the Win32 API, broadening problem-solving capabilities across multiple technologies.
    - **Reverse Engineering & Analysis:** Developed a disassembler to read dependencies from Windows-PE and C# executables for debugging and system analysis.

  :::

::::

::: tabs

@tab Core Skills

### Leadership & Management

- Technical Leadership & Strategic Direction
- Cross-Functional Team Management
- Stakeholder Engagement & Communication
- Mentorship & Staff Development
- Incident Response Leadership

### Site Reliability Engineering

- **Hyperscale distributed systems** architecture & design (serving 200M+ users)
- **Chaos engineering & resilience testing** at enterprise scale
- **Service Level Objectives (SLOs) & Error Budgets** with statistical process control
- **Advanced observability & monitoring** strategy for mission-critical systems
- **Platform engineering** & developer experience optimization

### Software Engineering

- Low-Level Systems Programming
- API Design & Microservices Architecture
- Performance Optimization & Debugging
- Code Review & Engineering Standards

@tab Technologies

### Container & Orchestration

- **Kubernetes** (K3s, ClusterAPI, Production Scale)
- **Docker** & Docker-Compose
- **ArgoCD** & GitOps Workflows
- **Cilium CNI** & Service Mesh

### Observability & Monitoring

- **Grafana LGTM Stack** (Loki, Grafana, Tempo, Mimir)
- **Prometheus** & Custom Metrics
- **Service Level Indicators** & SLO Management
- **Distributed Tracing** & Performance Analytics

### Infrastructure & Automation

- **Terraform** & Infrastructure as Code
- **Ansible** & Configuration Management
- **Azure Resource Manager** (ARM) & Bicep
- **CI/CD Pipelines** (GitHub Actions, GitLab CI/CD)

### Programming Languages

- **Go** (Primary for system tools & APIs)
- **Rust** (Performance-critical applications)
- **Python** (Automation & data processing)
- **C++** (Low-level systems & drivers)
- **TypeScript** & **Bash** scripting

### Networking & Security

- **IPsec IKEv2** & VPN Technologies
- **BGP** & Network Protocols
- **Wireguard** & **Tailscale**
- **Arista EOS** & **HPE/Aruba** Hardware

@tab Specializations

### Chaos Engineering

- **Led chaos engineering implementation** across millions of servers globally at Microsoft Azure
- **Statistical process control** for automated chaos experiment evaluation in CI/CD pipelines
- **Azure Chaos Studio** and **Chaos Mesh** for cloud and Kubernetes infrastructure
- **Enterprise-scale resilience testing** with automated failure hypothesis validation
- **Game day exercises** and comprehensive disaster recovery planning

### Platform Engineering

- Developer experience optimization
- Internal tooling & automation platforms
- Release engineering & deployment strategies
- Migration planning & execution

### Open Source & Community

- **Cloud-Native Computing Foundation** (CNCF) ecosystem
- Open source project contributions
- Technical writing & documentation
- Conference speaking & knowledge sharing

### Specialized Interests

- **Home Lab Experimentation** (K8s, IoT, LoRaWAN, ESP32)
- **Analog Photography** & Darkroom Development
- **Time Synchronization** (NTP/PTP Stratum 1 servers)
- **Distributed Systems Research** & Algorithm Implementation

:::
