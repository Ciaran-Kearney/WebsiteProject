const y={grange:{title:"Grange Backup Power Plant",description:"Environmental Noise Assessment for a 96MW Backup Power Generation Facility",details:`
        <p>Led the environmental noise assessment for a significant backup power generation facility:</p>
        <ul>
          <li>Conducted comprehensive environmental noise modelling and impact assessment</li>
          <li>Performed internal room acoustics modelling</li>
          <li>Developed effective environmental and internal noise mitigation strategies</li>
          <li>Reverse engineered and critically reviewed preliminary third-party noise assessments</li>
          <li>Prepared acoustic documentation to accompany the planning application</li>
        </ul>
        <p>Successfully secured planning permission with all noise-related conditions fully approved.</p>
      `,tags:["Environmental Noise","Power Generation","Noise Mitigation"],image:"/assets/images/projects/grange.jpg"},bt:{title:"BT Ireland Data Centre",description:"Environmental Noise Planning Assessment for Data Centre Development",details:`
        <p>Managed the environmental noise assessment for a large-scale data centre development:</p>
        <ul>
          <li>Carried out baseline environmental noise monitoring</li>
          <li>Completed predictive noise modelling for plant systems</li>
          <li>Reviewed mechanical plant equipment specifications for acoustic impact</li>
          <li>Designed and recommended targeted noise mitigation measures</li>
        </ul>
        <p>The project met all environmental noise targets and planning requirements.</p>
      `,tags:["Data Centre","Environmental Assessment","Noise Monitoring"],image:"/assets/images/projects/bt.webp"},merck:{title:"Merck 2.0 Manufacturing Expansion",description:"Noise Assessment for â‚¬150 Million Facility Expansion",details:`
        <p>Led the comprehensive environmental noise assessment for a major pharmaceutical facility expansion:</p>
        <ul>
          <li>Conducted environmental noise impact assessments in compliance with planning and EPA guidelines</li>
          <li>Advised on noise specifications for key plant and equipment</li>
          <li>Collaborated with design and construction teams to ensure acoustic requirements were embedded into the project delivery</li>
        </ul>
        <p>Project delivered on time and met all regulatory acoustic requirements.</p>
      `,tags:["Pharmaceutical","EPA Compliance","Facility Expansion"],image:"/assets/images/projects/merck.jpg"},dargle:{title:"Project Dargle Schools Bundle",description:"Environmental & Building Acoustics Assessment for Multiple School Developments",details:`
        <p>Managed and delivered acoustic assessments across multiple educational facilities:</p>
        <ul>
          <li>Performed reverberation time assessments, sound insulation analysis, and environmental noise impact evaluations</li>
          <li>Evaluated traffic noise exposure and site-specific acoustic constraints</li>
          <li>Provided acoustic design for classrooms, halls, and administrative spaces to comply with the SDG 02-05-03 standard</li>
          <li>Prepared and submitted all required planning documentation</li>
        </ul>
        <p>Planning permission successfully achieved across all school sites.</p>
      `,tags:["Education","Building Acoustics","SDG Standards"],image:"/assets/images/projects/dargle.webp"},irishlife:{title:"Irish Life Block 3 â€“ Abbey Street, Dublin",description:"Room Acoustics and Environmental Noise Design for Office Redevelopment",details:`
        <p>Led the comprehensive acoustic design for the redevelopment of a multi-storey office block:</p>
        <ul>
          <li>Developed detailed room acoustic models for the entire development</li>
          <li>Designed meeting rooms for optimal speech intelligibility and video conferencing functionality</li>
          <li>Specified reverberation control treatments for open-plan and communal areas</li>
          <li>Designed environmental noise mitigation solutions to protect adjacent properties</li>
        </ul>
        <p>Delivered a high-quality acoustic environment promoting productivity and user comfort.</p>
      `,tags:["Office Design","Room Acoustics","Environmental Noise"],image:"/assets/images/projects/irishlife.jpg"},esb:{title:"ESB Aghada Generating Station",description:"Environmental Noise Assessment with onsite measurement innovation",details:`
        <p>Led a technically complex noise assessment involving active power generation systems:</p>
        <ul>
          <li>Designed and implemented innovative methods for obtaining acoustic measurements inside the exhaust path of an operating generating station</li>
          <li>Evaluated environmental noise propagation and compliance with EPA license conditions</li>
        </ul>
        <p>Enabled accurate assessment in challenging conditions, contributing to ongoing compliance and operations.</p>
      `,tags:["Power Generation","EPA Compliance","Noise Measurement"],image:"/assets/images/projects/esb.jpg"},stryker:{title:"Stryker Cobot Cell",description:"Robotic Cell Integration & Automation",details:`
        <p>Developed and commissioned a proof-of-concept robotic cell for medical device packaging:</p>
        <ul>
          <li>Integrated communications between ZT620 printer, V275 inspection system, and Omron cobot</li>
          <li>Developed PLC logic and custom print programs</li>
          <li>Implemented a vision system, including inspection templates for barcodes, ORC, and blemishes</li>
        </ul>
        <p>Successfully designed and demonstrated an automated packaging and inspection workflow.</p>
      `,tags:["Automation","Vision Systems","Robotics"],image:"/assets/images/projects/stryker.jpg",video:"https://www.youtube.com/embed/3wk3chdVGFw"},almac:{title:"Almac Syringe Labeller",description:"Syringe Print and Apply System Deployment",details:`
        <p>Oversaw the delivery and installation of a wrap-around syringe labelling solution:</p>
        <ul>
          <li>Acted as main point of contact for the customer during delivery and testing phases</li>
          <li>Supported FAT, ensuring equipment met functional and quality requirements</li>
          <li>Performed labeller validation and line integration testing</li>
          <li>Assisted with installation, aligning mechanical and control systems with existing infrastructure</li>
        </ul>
        <p>System commissioned with no delays and fully integrated into production workflow.</p>
      `,tags:["Automation","System Integration","Validation"],image:"/assets/images/projects/almac.jpg"},viatris:{title:"Viatris Line 3",description:"Automated Labelling and Inspection Line Installation",details:`
        <p>Delivered a complete automated solution for vial labelling and inspection:</p>
        <ul>
          <li>Installed and aligned printer, vision inspection unit, wrap-around labeller, presence check sensor, and reject station</li>
          <li>Programmed the inspection system</li>
          <li>Oversaw integration into existing manufacturing environment with minimal disruption</li>
          <li>Completed validation protocols and reports</li>
        </ul>
        <p>High-performance line successfully brought into production with full validation compliance.</p>
      `,tags:["Automation","Vision Inspection","Manufacturing"],image:"/assets/images/projects/viatris.jpg",video:"https://www.youtube.com/embed/28G7U99cC4c"}};document.addEventListener("DOMContentLoaded",()=>{const c=document.querySelectorAll(".project-card"),e=document.getElementById("projectModal");e.querySelector(".modal-content");const d=e.querySelector(".modal-title"),t=e.querySelector(".modal-tags"),m=e.querySelector(".modal-description"),a=e.querySelector(".modal-details");e.querySelector(".modal-image");const p=e.querySelector(".modal-close"),u=e.querySelector(".modal-overlay");function s(){e.classList.remove("active"),document.body.style.overflow=""}c.forEach(l=>{l.querySelector(".view-project-btn").addEventListener("click",g=>{g.stopPropagation();const v=l.dataset.project,i=y[v];for(d.textContent=i.title;t.firstChild;)t.removeChild(t.firstChild);i.tags.forEach(f=>{const o=document.createElement("span");o.className="tag",o.textContent=f,t.appendChild(o)}),m.textContent=i.description;const r=document.createElement("div");r.innerHTML=i.details,a.innerHTML="",a.appendChild(r);const n=e.querySelector(".modal-media");i.video?n.innerHTML=`<iframe width="100%" height="315" src="${i.video}" title="Stryker Demo" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`:i.image?n.innerHTML=`<img class="modal-image" src="${i.image}" alt="${i.title}" />`:n.innerHTML="",e.classList.add("active"),document.body.style.overflow="hidden"})}),p.addEventListener("click",s),u.addEventListener("click",s)});
