function mountSharedSections() {
  const recruiterTarget = document.getElementById('shared-content-r');
  const hiringTarget = document.getElementById('shared-content-hm');

  if (!recruiterTarget || !hiringTarget) {
    return;
  }

  const templateMap = {
    experience: document.getElementById('section-experience'),
    skills: document.getElementById('section-skills'),
    education: document.getElementById('section-education'),
    footer: document.getElementById('section-footer')
  };

  const appendSections = (target, order) => {
    target.innerHTML = '';
    order.forEach((key) => {
      const template = templateMap[key];
      if (template) {
        target.appendChild(template.content.cloneNode(true));
      }
    });
  };

  appendSections(recruiterTarget, ['skills', 'experience', 'education', 'footer']);
  appendSections(hiringTarget, ['experience', 'skills', 'education', 'footer']);
}

function switchView(v) {
  document.body.setAttribute('data-view', v);
  document.getElementById('view-r').classList.toggle('visible', v === 'r');
  document.getElementById('view-hm').classList.toggle('visible', v === 'hm');
  document.getElementById('btn-r').className = 'vs-btn' + (v === 'r' ? ' active-r' : '');
  document.getElementById('btn-h').className = 'vs-btn' + (v === 'hm' ? ' active-h' : '');
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

mountSharedSections();
