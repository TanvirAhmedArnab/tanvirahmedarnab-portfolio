"""Build the public support-focused resume PDF from reviewed profile facts."""
from pathlib import Path
from reportlab.lib import colors
from reportlab.lib.pagesizes import letter
from reportlab.lib.styles import getSampleStyleSheet, ParagraphStyle
from reportlab.platypus import SimpleDocTemplate, Paragraph, Spacer, PageBreak

ROOT = Path(__file__).resolve().parents[1]
styles = getSampleStyleSheet()
styles.add(ParagraphStyle(name='ResumeBody', fontName='Helvetica', fontSize=9.5, leading=13, spaceAfter=6))
styles.add(ParagraphStyle(name='ResumeSection', fontName='Helvetica-Bold', fontSize=12, leading=16, textColor=colors.HexColor('#16324c'), spaceBefore=13, spaceAfter=7))
styles.add(ParagraphStyle(name='ResumeRole', fontName='Helvetica-Bold', fontSize=10, leading=14, spaceBefore=7, spaceAfter=4))
story = []
def p(text, style='ResumeBody'):
    story.append(Paragraph(text, styles[style]))
def section(text): p(text, 'ResumeSection')
def role(title, dates, text):
    p(f'{title} | {dates}', 'ResumeRole')
    p(text)
def footer(canvas, doc):
    canvas.saveState()
    canvas.setFont('Helvetica', 8)
    canvas.setFillColor(colors.HexColor('#596779'))
    canvas.drawString(42, 26, 'Tanvir Ahmed Arnab | Software & Product Support')
    canvas.drawRightString(570, 26, str(doc.page))
    canvas.restoreState()

p('Tanvir Ahmed Arnab', 'Title')
p('SOFTWARE &amp; PRODUCT SUPPORT', 'ResumeSection')
p('Toronto, Canada | Full work rights in Canada and Australia')
p('<link href="mailto:contact@tanvirahmedarnab.com">contact@tanvirahmedarnab.com</link> | '
  '<link href="https://www.linkedin.com/in/taanb/">linkedin.com/in/taanb</link> | '
  '<link href="https://github.com/TanvirAhmedArnab">github.com/TanvirAhmedArnab</link>')
section('Profile')
p('Career changer targeting entry-level software, product and application support. Experience in customer service, banking operations, administration and English tutoring, alongside practical C#, Python and Unity education. Brings clear communication, enquiry investigation, accurate records and procedural discipline, supported by programming projects involving validation, testing and documentation.')
section('Relevant skills')
p('Customer service | Problem solving | Business communication | Salesforce | CRM | Data validation | Microsoft Excel | C# | Python fundamentals | Debugging | Software documentation | Git version control | Software testing')
section('Selected experience')
role('Teaching Assistant - George Brown Polytechnic', '2023-2025', 'Led weekly English tutorials and individual tutoring. Adapted explanations to students\' needs and guided learners through coursework and unfamiliar concepts.')
role('Processing Officer - Scotiabank', '2022-2023', 'Processed retail-card credit-administration cases, including duplicate-case investigations, credit-limit requests and account updates. Routed correspondence and maintained supporting documentation while following banking and privacy procedures.')
role('General Life and A&amp;S Insurance Agent - American Income Life: AO', '2022', 'Explained product information and discussed client needs in a regulated sales environment. Maintained accurate client records and compliance documentation.')
role('Exam Invigilator - Monash College', '2021', 'Monitored online examinations, verified student identities and examination environments, and clearly communicated examination instructions.')
role('Administration Assistant - Ermha Ltd', '2020-2021', 'Maintained client information in CRM and Procura, prepared service-budget information from approved plans and supported worker scheduling and record keeping.')
role('Customer Care Consultant - Australia Post', '2018-2019', 'Handled customer enquiries and Salesforce cases for missing items, disputed deliveries and delays. Investigated complaints, reviewed compensation eligibility and coordinated follow-up actions with internal teams and external stakeholders.')
story.append(PageBreak())
p('Tanvir Ahmed Arnab', 'Title')
section('Technical projects')
role('Solar System Simulation - Unity/C# Educational Application', '2026', 'Published an independent educational application with interactive navigation, scientific information panels and a guided tour. Added first-launch guidance, Help, persistent settings and reduced motion. Included automated Edit Mode and Play Mode tests, technical documentation and release records. Used AI assistance during development.')
p('<link href="https://tanvirahmedarnab.itch.io/solar-system-simulation">Playable demo and downloads</link> | <link href="https://github.com/TanvirAhmedArnab/SolarSystem">Source code</link>')
role('Simple Media Library System - C# Console Capstone', '2026', 'Applied object-oriented design to books, DVDs and music albums. Implemented validation, exception handling, flexible search and reports. Documented manual checks, XML code comments and debugging guidance; used Git and AI-assisted review.')
p('<link href="https://github.com/TanvirAhmedArnab/MediaLibrarySystem">Source code and documentation</link>')
role('Game Bug Tracker - ASP.NET Core Workflow Tool', '2026', 'Built a Razor Pages application with public bug lists and detail pages, severity and status fields, and owner-only create/edit access. Used EF Core and SQLite for persistence, migrations and seeded demo records; validated required titles and descriptions. Maintained source code and setup documentation.')
p('<link href="https://github.com/TanvirAhmedArnab/game-bug-tracker">Source code</link> | <link href="https://www.tanvirahmedarnab.com/game-bug-tracker.html">Case study</link>')
section('Education')
role('George Brown Polytechnic', '2023-2025', 'Ontario College Advanced Diploma, Game - Programming. GPA: 3.62. Graduated with Honours; Dean\'s List recognition in four terms. Coursework included C++, C#, object-oriented programming, data structures and algorithms, debugging and version control.')
p('<b>Monash University:</b> Master of Professional Accounting (Advanced).')
p('<b>North South University:</b> Bachelor of Business Administration, Marketing.')
section('Selected certifications')
p('Python Basics - University of Michigan (2026)<br/>IBM DevOps, Cloud, and Agile Foundations Specialization (2026)<br/>Introduction to Software Engineering - IBM (2026)<br/>Advanced C# Language Features &amp; Object-Oriented Programming - Microsoft (2026)<br/>International Tutor Training Program Certification - Level I Certified, CRLA (2025)')
section('Additional experience')
p('Customer Service Representative, Coles (2017-2021); Admin Support Officer, Plan Partners (2019-2020); Settlements Administrator, Maxxia (2019); Assistant Accountant Trainee, Platinum Accounting Australia (2017-2018); Accountant, Excellent Corporation (2013-2014); Assistant Procurement Manager, British American Tobacco Bangladesh (2012-2013).')
SimpleDocTemplate(str(ROOT/'assets/taarn-support-resume.pdf'), pagesize=letter, rightMargin=42, leftMargin=42, topMargin=35, bottomMargin=42, title='Tanvir Ahmed Arnab - Software and Product Support', author='Tanvir Ahmed Arnab').build(story,onFirstPage=footer,onLaterPages=footer)
