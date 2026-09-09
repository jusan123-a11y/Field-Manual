/**
 * FIELD MANUAL — Client Application Script
 * Precision IT Field Manuals
 */

document.addEventListener('DOMContentLoaded', () => {

  /* ==========================================================================
     CATALOG DATABASE
     ========================================================================== */
  const CATALOG = {
    'fm-01': {
      id: 'fm-01',
      title: 'Small Office IT Survival Guide',
      category: 'practical',
      price: 19,
      pages: 82,
      format: 'PDF + EPUB',
      badge: 'PRACTICAL',
      image: 'assets/images/featured-book.png',
      summary: '25 practical fixes every small business should know before calling an IT professional.',
      roles: ['small-business', 'office-admin', 'junior-it', 'school-tech'],
      problems: ['wifi', 'printers', 'computers', 'networks', 'cybersecurity'],
      toc: [
        'Chapter 1: The First 5 Minutes — Preserving diagnostic evidence',
        'Chapter 2: Physical Cable & Port Inspection Protocols',
        'Chapter 3: Gateway, DNS & Wi-Fi Triage Tree',
        'Chapter 4: Windows TCP/IP Network Stack Reset',
        'Chapter 5: Permanent Spooler & Network Printer Fixes',
        'Chapter 6: IP Subnet Collisions & Rogue DHCP Detection',
        'Chapter 7: Recoverable 3-2-1 Backups Without Enterprise Licensing',
        'Chapter 8: Emergency Ransomware Containment Checklist'
      ],
      sample: {
        title: 'Chapter 3: The 4-Step Internet Diagnostic Tree',
        content: `When an office worker shouts "the internet is down," never reboot the router first. Follow the diagnostic ladder:\n\nStep 1: Ping the Loopback Address (127.0.0.1)\nVerifies local OS network stack integrity.\n\nStep 2: Ping the Default Gateway (e.g. 192.168.1.1)\nVerifies local switch and wireless link to the router.\n\nStep 3: Ping Public DNS IP (1.1.1.1)\nVerifies WAN link and ISP upstream connectivity.\n\nStep 4: Resolve Domain (nslookup google.com)\nIsolates pure DNS resolution failures from physical circuit downtime.`
      }
    },
    'fm-02': {
      id: 'fm-02',
      title: 'Network Troubleshooting',
      category: 'practical',
      price: 19,
      pages: 74,
      format: 'PDF + EPUB',
      badge: 'PRACTICAL',
      image: 'assets/images/guide-network.png',
      summary: 'Field-tested network triage: packet loss, VLANs, DNS loops, and switch diagnostics.',
      roles: ['junior-it', 'small-business', 'school-tech', 'it-students'],
      problems: ['wifi', 'networks'],
      toc: [
        'Chapter 1: The OSI Physical & Data Link Diagnostic Checklist',
        'Chapter 2: Diagnosing Duplex Mismatches & Link Flapping',
        'Chapter 3: Subnetting & CIDR Math for Field Technicians',
        'Chapter 4: Wireshark Fast-Filter Templates for Office Networks',
        'Chapter 5: DHCP Starvation and Rogue Server Isolation',
        'Chapter 6: Managed Switch Port Mirroring & VLAN Tagging'
      ],
      sample: {
        title: 'Chapter 2: Detecting Silent Duplex Mismatches',
        content: `A duplex mismatch occurs when one end of an Ethernet link is set to Full Duplex and the other to Half Duplex. The link will show "Connected" and ping will work, but file transfers will crawl at 120 KB/s with massive CRC errors.\n\nCheck interface statistics via CLI: look for "Late Collisions" and "FCS Errors" which are definitive indicators.`
      }
    },
    'fm-03': {
      id: 'fm-03',
      title: 'IP Camera Installation Guide',
      category: 'field',
      price: 24,
      pages: 96,
      format: 'PDF + EPUB',
      badge: 'FIELD',
      image: 'assets/images/guide-ip-camera.png',
      summary: 'CCTV, NVR, PoE power budgeting, RTSP streaming, and ONVIF discovery protocols.',
      roles: ['security-installer', 'junior-it'],
      problems: ['cameras', 'networks'],
      toc: [
        'Chapter 1: 802.3af vs 802.3at PoE Power Budget Calculations',
        'Chapter 2: ONVIF Device Manager & Zero-Conf Discovery',
        'Chapter 3: NVR Subnet Isolation: Dual-NIC vs Internal Switch',
        'Chapter 4: Bitrate, FPS, and H.265 vs H.264 Bandwidth Math',
        'Chapter 5: RTSP Direct Stream URL Extraction Protocols',
        'Chapter 6: Weatherproofing RJ45 Crimps & Ground Loop Elimination'
      ],
      sample: {
        title: 'Chapter 1: The PoE Budget Trap',
        content: `Never calculate PoE budgets using the camera\'s nominal daytime wattage. When infrared (IR) night illuminators click on at dusk, current draw can double or triple, causing the PoE switch to brown out and drop all channels simultaneously.\n\nAlways budget at least 12.9W per standard dome and 25.5W for motorized PTZ cameras.`
      }
    },
    'fm-04': {
      id: 'fm-04',
      title: 'Windows 11 for IT Support',
      category: 'practical',
      price: 18,
      pages: 68,
      format: 'PDF + EPUB',
      badge: 'PRACTICAL',
      image: 'assets/images/guide-windows11.png',
      summary: 'Rapid repair workflows for Windows 11 workstations, profile corruption, and update triage.',
      roles: ['junior-it', 'office-admin', 'it-students', 'school-tech'],
      problems: ['computers'],
      toc: [
        'Chapter 1: DISM & SFC Deep Clean Repair Matrices',
        'Chapter 2: Unattended Domain Join & Profile Migration',
        'Chapter 3: Fixing Broken Windows Search & Indexing Databases',
        'Chapter 4: Windows Update Error 0x800f0922 & Catalog Cleansing',
        'Chapter 5: Group Policy (GPO) Troubleshooting from CMD',
        'Chapter 6: Hardware Accelerated GPU Scheduling Glitches'
      ],
      sample: {
        title: 'Chapter 1: The Proper Sequence for SFC and DISM',
        content: `Running sfc /scannow before DISM is a common mistake. If the local Component Store itself is corrupt, SFC has no clean source to restore damaged binaries from.\n\nAlways run:\nDISM /Online /Cleanup-Image /RestoreHealth\nOnly once DISM completes successfully, execute:\nsfc /scannow`
      }
    },
    'fm-05': {
      id: 'fm-05',
      title: 'Printer Troubleshooting',
      category: 'starter',
      price: 16,
      pages: 54,
      format: 'PDF + EPUB',
      badge: 'STARTER',
      image: 'assets/images/guide-printer.png',
      summary: 'Eliminate print queue hangs, offline errors, WSD port confusion, and driver collisions.',
      roles: ['office-admin', 'small-business', 'school-tech'],
      problems: ['printers'],
      toc: [
        'Chapter 1: The Fatal Flaw of WSD Ports (And Why to Use Standard TCP/IP)',
        'Chapter 2: The 3-Line Batch Script to Nuking the Print Spooler',
        'Chapter 3: Shared Network Printers & Type 3 vs Type 4 Driver Conflicts',
        'Chapter 4: Network Scanner SMBv2/v3 Authentication Failures',
        'Chapter 5: Paper Path Sensor Cleaning & Pick-Up Roller Reconditioning'
      ],
      sample: {
        title: 'Chapter 1: Killing WSD (Web Services for Devices)',
        content: `If a network printer randomly goes "Offline" every afternoon, 90% of the time Windows auto-discovered it using a WSD port instead of a Standard TCP/IP port.\n\nSolution: Go to Printer Properties > Ports > Add Port > Standard TCP/IP Port. Enter the printer\'s reserved static IP address. Disable SNMP status checking if the printer goes into deep sleep.`
      }
    },
    'fm-06': {
      id: 'fm-06',
      title: 'IT Support Technician Starter',
      category: 'starter',
      price: 22,
      pages: 110,
      format: 'PDF + EPUB',
      badge: 'STARTER',
      image: 'assets/images/guide-it-starter.png',
      summary: 'The field technician bible: help desk triage, ticketing etiquette, and hardware diagnostic playbooks.',
      roles: ['junior-it', 'it-students', 'school-tech'],
      problems: ['computers', 'networks'],
      toc: [
        'Chapter 1: First-Contact User Triage & Asking the Right Questions',
        'Chapter 2: The Field Technician USB Toolkit: Portable Diagnostic Utilities',
        'Chapter 3: Power Supply Unit (PSU) Testing with a Multimeter',
        'Chapter 4: Memory Diagnostic Tests (MemTest86+ Field Procedures)',
        'Chapter 5: Local Admin Password Recovery & Recovery Environments',
        'Chapter 6: Cable Management, Patch Panels, and Punch-Down Standards'
      ],
      sample: {
        title: 'Chapter 2: The Essential USB Toolkit',
        content: `Never show up to an office without a Ventoy multi-boot drive loaded with:\n1. Hiren\'s BootCD PE for offline diagnostics\n2. MemTest86 for RAM parity validation\n3. Clonezilla for emergency block-level disk imaging before destructive repairs\n4. Ubuntu Live for retrieving data from unbootable Windows NTFS drives.`
      }
    },
    'fm-07': {
      id: 'fm-07',
      title: 'Cybersecurity Basics',
      category: 'practical',
      price: 20,
      pages: 76,
      format: 'PDF + EPUB',
      badge: 'PRACTICAL',
      image: 'assets/images/guide-cybersecurity.png',
      summary: 'Ransomware defense, MFA rollout, phishing protection, and credential audits for small teams.',
      roles: ['small-business', 'office-admin', 'it-students'],
      problems: ['cybersecurity'],
      toc: [
        'Chapter 1: The 60-Second Ransomware Containment Checklist',
        'Chapter 2: Phishing Header Analysis for Non-Security Personnel',
        'Chapter 3: Hardware Security Keys (FIDO2/WebAuthn) Deployment Guide',
        'Chapter 4: Password Manager Rollouts for Reluctant Teams',
        'Chapter 5: Securing Remote Desktop (RDP) & Disabling Port 3389',
        'Chapter 6: Encrypting USB Drives and Endpoint Storage with BitLocker'
      ],
      sample: {
        title: 'Chapter 1: The First 60 Seconds of a Ransomware Event',
        content: `If a computer displays a ransom note or starts rapidly renaming files:\n\n1. DO NOT shut down the computer via the OS start menu (this allows final payload scripts to execute).\n2. Pull the Ethernet cable and disable Wi-Fi immediately to cut off command & control servers and lateral subnet spread.\n3. Hold the physical power button down for 10 seconds to cut power if active encryption is running, OR leave in memory if live forensics are planned.`
      }
    }
  };

  /* ==========================================================================
     SHOPPING CART SYSTEM (LocalStorage-backed)
     ========================================================================== */
  let cart = [];
  let appliedPromo = null;

  function loadCart() {
    try {
      const saved = localStorage.getItem('fieldmanual_cart');
      if (saved) {
        cart = JSON.parse(saved);
      }
    } catch (e) {
      cart = [];
    }
    updateCartUI();
  }

  function saveCart() {
    try {
      localStorage.setItem('fieldmanual_cart', JSON.stringify(cart));
    } catch (e) {
      console.warn('Could not save cart to localStorage', e);
    }
    updateCartUI();
  }

  function addToCart(guideId) {
    const guide = CATALOG[guideId];
    if (!guide) return;

    const existing = cart.find(item => item.id === guideId);
    if (existing) {
      existing.qty += 1;
    } else {
      cart.push({
        id: guide.id,
        title: guide.title,
        price: guide.price,
        image: guide.image,
        format: guide.format,
        qty: 1
      });
    }

    saveCart();
    showToast(`Added "${guide.title}" to cart`);
    openCartDrawer();
  }

  function addBundleToCart(bundleType) {
    if (bundleType === 'all') {
      cart.push({
        id: 'bundle-all',
        title: 'Complete All-in-One Field Pack (#01-#07)',
        price: 69,
        image: 'assets/images/featured-book.png',
        format: 'All 7 Guides (PDF + EPUB)',
        qty: 1
      });
      showToast('Added Complete Field Pack to cart!');
    } else {
      cart.push({
        id: 'bundle-netsec',
        title: 'Network & Security Specialist Pack',
        price: 39,
        image: 'assets/images/guide-network.png',
        format: '3 Guides (PDF + EPUB)',
        qty: 1
      });
      showToast('Added Network & Security Pack to cart!');
    }

    saveCart();
    closeAllModals();
    openCartDrawer();
  }

  function updateItemQty(id, delta) {
    const item = cart.find(i => i.id === id);
    if (!item) return;

    item.qty += delta;
    if (item.qty <= 0) {
      cart = cart.filter(i => i.id !== id);
    }
    saveCart();
  }

  function removeItemFromCart(id) {
    cart = cart.filter(i => i.id !== id);
    saveCart();
  }

  function updateCartUI() {
    const count = cart.reduce((sum, item) => sum + item.qty, 0);
    const cartCountBadge = document.getElementById('cartCount');
    const cartDrawerCount = document.getElementById('cartDrawerCount');
    const cartEmptyState = document.getElementById('cartEmptyState');
    const cartItemsList = document.getElementById('cartItemsList');
    const cartSubtotal = document.getElementById('cartSubtotal');
    const cartDrawerFooter = document.getElementById('cartDrawerFooter');

    if (cartCountBadge) cartCountBadge.textContent = count;
    if (cartDrawerCount) cartDrawerCount.textContent = `(${count} item${count === 1 ? '' : 's'})`;

    if (count === 0) {
      if (cartEmptyState) cartEmptyState.style.display = 'flex';
      if (cartItemsList) cartItemsList.innerHTML = '';
      if (cartDrawerFooter) cartDrawerFooter.style.display = 'none';
      return;
    }

    if (cartEmptyState) cartEmptyState.style.display = 'none';
    if (cartDrawerFooter) cartDrawerFooter.style.display = 'block';

    let total = 0;
    let html = '';

    cart.forEach(item => {
      const itemTotal = item.price * item.qty;
      total += itemTotal;
      html += `
        <div class="cart-item" data-id="${item.id}">
          <img src="${item.image}" alt="${item.title}" class="cart-item-img">
          <div class="cart-item-info">
            <span class="cart-item-title">${item.title}</span>
            <span class="cart-item-format">${item.format}</span>
            <div class="cart-item-actions">
              <div class="cart-qty-ctrl">
                <button class="qty-btn" data-action="decrease" data-id="${item.id}">&minus;</button>
                <span class="qty-num">${item.qty}</span>
                <button class="qty-btn" data-action="increase" data-id="${item.id}">&plus;</button>
              </div>
              <span class="cart-item-price">$${itemTotal}</span>
              <button class="cart-item-remove" data-action="remove" data-id="${item.id}">Remove</button>
            </div>
          </div>
        </div>
      `;
    });

    if (appliedPromo) {
      total = total * appliedPromo.factor;
    }

    if (cartItemsList) cartItemsList.innerHTML = html;
    if (cartSubtotal) cartSubtotal.textContent = `$${total.toFixed(2)}`;

    // Add listeners to cart item buttons
    if (cartItemsList) {
      cartItemsList.querySelectorAll('.qty-btn').forEach(btn => {
        btn.addEventListener('click', () => {
          const id = btn.dataset.id;
          const action = btn.dataset.action;
          updateItemQty(id, action === 'increase' ? 1 : -1);
        });
      });

      cartItemsList.querySelectorAll('.cart-item-remove').forEach(btn => {
        btn.addEventListener('click', () => {
          removeItemFromCart(btn.dataset.id);
        });
      });
    }
  }

  /* ==========================================================================
     MODALS & DRAWERS MANAGEMENT
     ========================================================================== */
  const cartDrawer = document.getElementById('cartDrawer');
  const drawerBackdrop = document.getElementById('drawerBackdrop');
  const cartTrigger = document.getElementById('cartTrigger');
  const cartDrawerClose = document.getElementById('cartDrawerClose');
  const cartBrowseBtn = document.getElementById('cartBrowseBtn');

  function openCartDrawer() {
    if (cartDrawer) cartDrawer.classList.add('active');
    if (drawerBackdrop) drawerBackdrop.classList.add('active');
    document.body.style.overflow = 'hidden';
  }

  function closeCartDrawer() {
    if (cartDrawer) cartDrawer.classList.remove('active');
    if (drawerBackdrop) drawerBackdrop.classList.remove('active');
    document.body.style.overflow = '';
  }

  if (cartTrigger) cartTrigger.addEventListener('click', openCartDrawer);
  if (cartDrawerClose) cartDrawerClose.addEventListener('click', closeCartDrawer);
  if (drawerBackdrop) drawerBackdrop.addEventListener('click', () => {
    closeCartDrawer();
    closeMobileDrawer();
    closeAllModals();
  });
  if (cartBrowseBtn) cartBrowseBtn.addEventListener('click', () => {
    closeCartDrawer();
    const lib = document.getElementById('library');
    if (lib) lib.scrollIntoView({ behavior: 'smooth' });
  });

  // Mobile drawer
  const mobileToggle = document.getElementById('mobileToggle');
  const mobileDrawer = document.getElementById('mobileDrawer');
  const mobileDrawerClose = document.getElementById('mobileDrawerClose');

  function openMobileDrawer() {
    if (mobileDrawer) mobileDrawer.classList.add('active');
    if (drawerBackdrop) drawerBackdrop.classList.add('active');
    document.body.style.overflow = 'hidden';
  }

  function closeMobileDrawer() {
    if (mobileDrawer) mobileDrawer.classList.remove('active');
    if (drawerBackdrop) drawerBackdrop.classList.remove('active');
    document.body.style.overflow = '';
  }

  if (mobileToggle) mobileToggle.addEventListener('click', openMobileDrawer);
  if (mobileDrawerClose) mobileDrawerClose.addEventListener('click', closeMobileDrawer);
  document.querySelectorAll('[data-mobile-nav]').forEach(link => {
    link.addEventListener('click', closeMobileDrawer);
  });

  const mobileFindGuide = document.getElementById('mobileFindGuide');
  if (mobileFindGuide) {
    mobileFindGuide.addEventListener('click', () => {
      closeMobileDrawer();
      openQuizModal();
    });
  }

  function closeAllModals() {
    document.querySelectorAll('.modal-overlay').forEach(modal => {
      modal.classList.remove('active');
      modal.setAttribute('aria-hidden', 'true');
    });
    document.body.style.overflow = '';
  }

  function openModal(modalId) {
    const modal = document.getElementById(modalId);
    if (modal) {
      modal.classList.add('active');
      modal.setAttribute('aria-hidden', 'false');
      document.body.style.overflow = 'hidden';
    }
  }

  // Modal close buttons
  document.querySelectorAll('.modal-close').forEach(btn => {
    btn.addEventListener('click', closeAllModals);
  });

  document.querySelectorAll('.modal-overlay').forEach(overlay => {
    overlay.addEventListener('click', (e) => {
      if (e.target === overlay) {
        closeAllModals();
      }
    });
  });

  // Escape key closes modals
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      closeAllModals();
      closeCartDrawer();
      closeMobileDrawer();
    }
  });

  /* ==========================================================================
     PROMO CODE & CHECKOUT FLOW
     ========================================================================== */
  const promoInput = document.getElementById('promoInput');
  const applyPromoBtn = document.getElementById('applyPromoBtn');
  const checkoutBtn = document.getElementById('checkoutBtn');
  const checkoutSuccessModal = document.getElementById('checkoutSuccessModal');
  const purchasedDownloadsList = document.getElementById('purchasedDownloadsList');
  const successDoneBtn = document.getElementById('successDoneBtn');

  if (applyPromoBtn) {
    applyPromoBtn.addEventListener('click', () => {
      const code = (promoInput.value || '').trim().toUpperCase();
      if (code === 'FIELD10') {
        appliedPromo = { code: 'FIELD10', factor: 0.9 };
        showToast('Promo code applied: 10% discount!');
        updateCartUI();
      } else {
        showToast('Invalid promo code. Try FIELD10');
      }
    });
  }

  if (checkoutBtn) {
    checkoutBtn.addEventListener('click', () => {
      if (cart.length === 0) return;

      // Populate download list in success modal
      if (purchasedDownloadsList) {
        let html = '';
        cart.forEach(item => {
          html += `
            <div class="download-file-item">
              <div>
                <strong>${item.title}</strong>
                <div style="font-size: 0.72rem; color: #5E5B54;">Edition: 2026 &bull; PDF + EPUB (.zip)</div>
              </div>
              <button class="btn btn-outline-sm download-mock-btn" style="padding: 4px 10px; font-size: 0.72rem;">Download</button>
            </div>
          `;
        });
        purchasedDownloadsList.innerHTML = html;

        purchasedDownloadsList.querySelectorAll('.download-mock-btn').forEach(btn => {
          btn.addEventListener('click', () => {
            showToast('Starting digital manual download (.zip)...');
          });
        });
      }

      // Clear cart
      cart = [];
      saveCart();
      closeCartDrawer();
      openModal('checkoutSuccessModal');
    });
  }

  if (successDoneBtn) {
    successDoneBtn.addEventListener('click', closeAllModals);
  }

  /* ==========================================================================
     LOOK INSIDE / PREVIEW MODAL
     ========================================================================== */
  let currentPreviewGuideId = 'fm-01';

  function openPreview(guideId) {
    const guide = CATALOG[guideId] || CATALOG['fm-01'];
    currentPreviewGuideId = guide.id;

    const titleEl = document.getElementById('previewTitle');
    const badgeEl = document.getElementById('previewBadge');
    const imgEl = document.getElementById('previewBookImg');
    const pagesEl = document.getElementById('previewPages');
    const priceEl = document.getElementById('previewPrice');
    const tocListEl = document.getElementById('previewTOCList');
    const sampleBox = document.getElementById('tabContentSample');

    if (titleEl) titleEl.textContent = guide.title;
    if (badgeEl) badgeEl.textContent = `${guide.badge} SERIES PREVIEW`;
    if (imgEl) imgEl.src = guide.image;
    if (pagesEl) pagesEl.textContent = `${guide.pages} pages`;
    if (priceEl) priceEl.textContent = `$${guide.price}`;

    if (tocListEl && guide.toc) {
      tocListEl.innerHTML = guide.toc.map(item => `<li>${item}</li>`).join('');
    }

    if (sampleBox && guide.sample) {
      sampleBox.innerHTML = `
        <div class="sample-excerpt">
          <span class="sample-chapter-title">${guide.sample.title}</span>
          <pre style="white-space: pre-wrap; font-family: inherit; font-size: 0.84rem; line-height: 1.6; color: #1A1916;">${guide.sample.content}</pre>
        </div>
      `;
    }

    // Reset tabs to TOC
    document.querySelectorAll('.preview-tab').forEach(t => t.classList.remove('active'));
    document.querySelectorAll('.preview-tab-content').forEach(c => c.classList.remove('active'));
    const firstTab = document.querySelector('.preview-tab[data-tab="toc"]');
    const firstContent = document.getElementById('tabContentTOC');
    if (firstTab) firstTab.classList.add('active');
    if (firstContent) firstContent.classList.add('active');

    openModal('previewModal');
  }

  // Preview tabs switching
  document.querySelectorAll('.preview-tab').forEach(tab => {
    tab.addEventListener('click', () => {
      document.querySelectorAll('.preview-tab').forEach(t => t.classList.remove('active'));
      document.querySelectorAll('.preview-tab-content').forEach(c => c.classList.remove('active'));

      tab.classList.add('active');
      const target = tab.dataset.tab;
      if (target === 'toc') document.getElementById('tabContentTOC')?.classList.add('active');
      if (target === 'sample') document.getElementById('tabContentSample')?.classList.add('active');
      if (target === 'checklist') document.getElementById('tabContentChecklist')?.classList.add('active');
    });
  });

  const previewAddToCartBtn = document.getElementById('previewAddToCartBtn');
  if (previewAddToCartBtn) {
    previewAddToCartBtn.addEventListener('click', () => {
      addToCart(currentPreviewGuideId);
      closeAllModals();
    });
  }

  // Attach preview triggers
  document.querySelectorAll('[data-preview]').forEach(el => {
    el.addEventListener('click', (e) => {
      e.stopPropagation();
      openPreview(el.dataset.preview);
    });
  });

  // Attach add-to-cart triggers
  document.querySelectorAll('[data-add-to-cart]').forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.stopPropagation();
      addToCart(btn.dataset.addToCart);
    });
  });

  /* ==========================================================================
     LIBRARY FILTERING & TABS
     ========================================================================== */
  const libraryGrid = document.getElementById('libraryGrid');
  const filterIndicator = document.getElementById('filterIndicator');
  const filterName = document.getElementById('filterName');
  const clearFilterBtn = document.getElementById('clearFilterBtn');
  const resetFiltersLink = document.getElementById('resetFiltersLink');

  function filterLibrary(type, value) {
    const cards = libraryGrid.querySelectorAll('.book-card');
    let visibleCount = 0;

    cards.forEach(card => {
      let match = true;
      if (type === 'category') {
        if (value !== 'all') {
          match = card.dataset.category === value;
        }
      } else if (type === 'role') {
        const roles = (card.dataset.role || '').split(',');
        match = roles.includes(value);
      } else if (type === 'problem') {
        const problems = (card.dataset.problem || '').split(',');
        match = problems.includes(value);
      }

      if (match) {
        card.style.display = 'flex';
        visibleCount++;
      } else {
        card.style.display = 'none';
      }
    });

    if (type === 'category') {
      if (filterIndicator) filterIndicator.style.display = 'none';
      document.querySelectorAll('.filter-tab').forEach(tab => {
        tab.classList.toggle('active', tab.dataset.filter === value);
      });
    } else {
      if (filterIndicator && filterName) {
        filterIndicator.style.display = 'flex';
        filterName.textContent = value.replace(/-/g, ' ').toUpperCase();
      }
      document.querySelectorAll('.filter-tab').forEach(tab => tab.classList.remove('active'));
    }

    // Smooth scroll to library
    const lib = document.getElementById('library');
    if (lib) {
      lib.scrollIntoView({ behavior: 'smooth' });
    }
  }

  function resetFilters() {
    filterLibrary('category', 'all');
    if (filterIndicator) filterIndicator.style.display = 'none';
  }

  if (clearFilterBtn) clearFilterBtn.addEventListener('click', resetFilters);
  if (resetFiltersLink) resetFiltersLink.addEventListener('click', resetFilters);

  document.querySelectorAll('.filter-tab').forEach(tab => {
    tab.addEventListener('click', () => {
      filterLibrary('category', tab.dataset.filter);
    });
  });

  // Hero "Start With The Basics" button
  const heroStartBasics = document.getElementById('heroStartBasics');
  if (heroStartBasics) {
    heroStartBasics.addEventListener('click', (e) => {
      e.preventDefault();
      filterLibrary('category', 'starter');
    });
  }

  // Who is this for? Role Cards filtering
  document.querySelectorAll('.role-card').forEach(card => {
    card.addEventListener('click', () => {
      const role = card.dataset.roleFilter;
      if (role) filterLibrary('role', role);
    });
  });

  document.querySelectorAll('.role-link-btn').forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.stopPropagation();
      const role = btn.dataset.role;
      if (role) filterLibrary('role', role);
    });
  });

  // "Find the right guide for your role" link
  const filterRoleAll = document.getElementById('filterRoleAll');
  if (filterRoleAll) {
    filterRoleAll.addEventListener('click', (e) => {
      e.preventDefault();
      resetFilters();
    });
  }

  // Got a Problem? Problem buttons filtering
  document.querySelectorAll('.problem-col').forEach(btn => {
    btn.addEventListener('click', () => {
      const problem = btn.dataset.problemTag;
      if (problem) filterLibrary('problem', problem);
    });
  });

  const browseAllProblems = document.getElementById('browseAllProblems');
  if (browseAllProblems) {
    browseAllProblems.addEventListener('click', (e) => {
      e.preventDefault();
      resetFilters();
    });
  }

  // Dropdown menu click handlers
  document.querySelectorAll('[data-nav-filter]').forEach(el => {
    el.addEventListener('click', (e) => {
      filterLibrary('category', el.dataset.navFilter);
    });
  });

  document.querySelectorAll('[data-nav-role]').forEach(el => {
    el.addEventListener('click', (e) => {
      filterLibrary('role', el.dataset.navRole);
    });
  });

  document.querySelectorAll('[data-nav-problem]').forEach(el => {
    el.addEventListener('click', (e) => {
      filterLibrary('problem', el.dataset.navProblem);
    });
  });

  /* ==========================================================================
     DIAGNOSTIC 3-QUESTION QUIZ
     ========================================================================== */
  const btnStartQuiz = document.getElementById('btnStartQuiz');
  const quizModal = document.getElementById('quizModal');
  const quizProgress = document.getElementById('quizProgress');
  const quizStep1 = document.getElementById('quizStep1');
  const quizStep2 = document.getElementById('quizStep2');
  const quizStep3 = document.getElementById('quizStep3');
  const quizResult = document.getElementById('quizResult');
  const quizRecTitle = document.getElementById('quizRecTitle');
  const quizRecDesc = document.getElementById('quizRecDesc');
  const quizRecPrice = document.getElementById('quizRecPrice');
  const quizRecBadge = document.getElementById('quizRecBadge');
  const quizRecImg = document.getElementById('quizRecImg');
  const quizAddRecBtn = document.getElementById('quizAddRecBtn');
  const quizRetakeBtn = document.getElementById('quizRetakeBtn');

  let quizAnswers = { role: null, problem: null, depth: null };
  let recommendedGuideId = 'fm-01';

  function openQuizModal() {
    quizAnswers = { role: null, problem: null, depth: null };
    showQuizStep(1);
    openModal('quizModal');
  }

  function showQuizStep(step) {
    if (quizStep1) quizStep1.style.display = step === 1 ? 'block' : 'none';
    if (quizStep2) quizStep2.style.display = step === 2 ? 'block' : 'none';
    if (quizStep3) quizStep3.style.display = step === 3 ? 'block' : 'none';
    if (quizResult) quizResult.style.display = step === 4 ? 'block' : 'none';

    if (quizProgress) {
      if (step === 1) quizProgress.style.width = '33.3%';
      if (step === 2) quizProgress.style.width = '66.6%';
      if (step >= 3) quizProgress.style.width = '100%';
    }
  }

  function calculateRecommendation() {
    // Recommendation logic based on answers
    if (quizAnswers.role === 'security-installer' || quizAnswers.problem === 'cameras') {
      return 'fm-03'; // IP Camera Guide
    }
    if (quizAnswers.problem === 'printers') {
      return 'fm-05'; // Printer Troubleshooting
    }
    if (quizAnswers.problem === 'security-backups') {
      return 'fm-07'; // Cybersecurity Basics
    }
    if (quizAnswers.problem === 'wifi-network') {
      return 'fm-02'; // Network Troubleshooting
    }
    if (quizAnswers.role === 'junior-it' && quizAnswers.depth === 'beginner') {
      return 'fm-06'; // IT Support Technician Starter
    }
    return 'fm-01'; // Default: Small Office IT Survival Guide
  }

  function displayQuizResult() {
    recommendedGuideId = calculateRecommendation();
    const guide = CATALOG[recommendedGuideId];

    if (quizRecTitle) quizRecTitle.textContent = guide.title;
    if (quizRecDesc) quizRecDesc.textContent = guide.summary;
    if (quizRecPrice) quizRecPrice.textContent = `$${guide.price}`;
    if (quizRecBadge) {
      quizRecBadge.textContent = guide.badge;
      quizRecBadge.className = `pill-badge pill-${guide.category}`;
    }
    if (quizRecImg) quizRecImg.src = guide.image;

    showQuizStep(4);
  }

  document.querySelectorAll('.quiz-opt').forEach(opt => {
    opt.addEventListener('click', () => {
      const q = parseInt(opt.dataset.q, 10);
      const val = opt.dataset.val;

      if (q === 1) {
        quizAnswers.role = val;
        showQuizStep(2);
      } else if (q === 2) {
        quizAnswers.problem = val;
        showQuizStep(3);
      } else if (q === 3) {
        quizAnswers.depth = val;
        displayQuizResult();
      }
    });
  });

  if (btnStartQuiz) btnStartQuiz.addEventListener('click', openQuizModal);
  if (quizRetakeBtn) quizRetakeBtn.addEventListener('click', () => showQuizStep(1));
  if (quizAddRecBtn) {
    quizAddRecBtn.addEventListener('click', () => {
      addToCart(recommendedGuideId);
      closeAllModals();
    });
  }

  /* ==========================================================================
     BUNDLES & FREE NOTES MODALS
     ========================================================================== */
  const btnViewBundles = document.getElementById('btnViewBundles');
  const btnFreeNotes = document.getElementById('btnFreeNotes');
  const navFreeResources = document.getElementById('navFreeResources');

  if (btnViewBundles) btnViewBundles.addEventListener('click', () => openModal('bundlesModal'));
  if (btnFreeNotes) btnFreeNotes.addEventListener('click', () => openModal('freeNotesModal'));
  if (navFreeResources) navFreeResources.addEventListener('click', (e) => {
    e.preventDefault();
    openModal('freeNotesModal');
  });

  document.querySelectorAll('.btn-add-bundle').forEach(btn => {
    btn.addEventListener('click', () => {
      addBundleToCart(btn.dataset.bundle);
    });
  });

  document.querySelectorAll('.download-res-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      showToast('Downloading free reference sheet (PDF)...');
      setTimeout(() => {
        closeAllModals();
      }, 1000);
    });
  });

  /* ==========================================================================
     INSTANT SEARCH SYSTEM
     ========================================================================== */
  const searchTrigger = document.getElementById('searchTrigger');
  const searchModal = document.getElementById('searchModal');
  const searchInput = document.getElementById('searchInput');
  const searchResultsBox = document.getElementById('searchResultsBox');

  function openSearch() {
    openModal('searchModal');
    setTimeout(() => {
      if (searchInput) searchInput.focus();
    }, 100);
  }

  if (searchTrigger) searchTrigger.addEventListener('click', openSearch);

  // Shortcut key '/' or 'Ctrl+K' opens search
  document.addEventListener('keydown', (e) => {
    if ((e.key === '/' || (e.ctrlKey && e.key === 'k')) && !['INPUT', 'TEXTAREA'].includes(document.activeElement.tagName)) {
      e.preventDefault();
      openSearch();
    }
  });

  if (searchInput) {
    searchInput.addEventListener('input', () => {
      const q = searchInput.value.trim().toLowerCase();
      if (!q) {
        searchResultsBox.innerHTML = '<div class="search-prompt">Type any keyword above to search our 7 practical guides and checklists.</div>';
        return;
      }

      const matches = Object.values(CATALOG).filter(guide => {
        return guide.title.toLowerCase().includes(q) ||
               guide.summary.toLowerCase().includes(q) ||
               guide.problems.some(p => p.includes(q)) ||
               guide.roles.some(r => r.includes(q));
      });

      if (matches.length === 0) {
        searchResultsBox.innerHTML = '<div class="search-prompt">No guides found matching your query.</div>';
        return;
      }

      let html = '';
      matches.forEach(guide => {
        html += `
          <div class="search-result-item" data-id="${guide.id}">
            <div class="search-item-left">
              <img src="${guide.image}" alt="${guide.title}" class="search-item-thumb">
              <div>
                <div class="search-item-title">${guide.title}</div>
                <div class="search-item-desc">${guide.summary}</div>
              </div>
            </div>
            <div style="display: flex; align-items: center; gap: 8px;">
              <span class="book-price">$${guide.price}</span>
              <button class="btn btn-outline-sm btn-search-view" data-preview="${guide.id}">View</button>
            </div>
          </div>
        `;
      });

      searchResultsBox.innerHTML = html;

      searchResultsBox.querySelectorAll('.btn-search-view').forEach(btn => {
        btn.addEventListener('click', (e) => {
          e.stopPropagation();
          closeAllModals();
          openPreview(btn.dataset.preview);
        });
      });

      searchResultsBox.querySelectorAll('.search-result-item').forEach(item => {
        item.addEventListener('click', () => {
          closeAllModals();
          openPreview(item.dataset.id);
        });
      });
    });
  }

  /* ==========================================================================
     STICKY HEADER SHADOW & SMOOTH SCROLL
     ========================================================================== */
  const siteHeader = document.getElementById('siteHeader');
  window.addEventListener('scroll', () => {
    if (window.scrollY > 15) {
      siteHeader?.classList.add('scrolled');
    } else {
      siteHeader?.classList.remove('scrolled');
    }
  });

  /* ==========================================================================
     TOAST NOTIFICATIONS
     ========================================================================== */
  function showToast(msg) {
    const container = document.getElementById('toastContainer');
    if (!container) return;

    const toast = document.createElement('div');
    toast.className = 'toast';
    toast.innerHTML = `
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#68D391" stroke-width="2.5"><path d="M20 6L9 17l-5-5"/></svg>
      <span>${msg}</span>
    `;

    container.appendChild(toast);

    setTimeout(() => {
      toast.style.opacity = '0';
      toast.style.transform = 'translateY(10px)';
      toast.style.transition = 'all 0.3s ease';
      setTimeout(() => toast.remove(), 300);
    }, 2800);
  }

  // Initialize
  loadCart();
});
