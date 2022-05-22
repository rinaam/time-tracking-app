const servicesFixture = {
  data: [
    {
      id: '1687626',
      type: 'services',
      attributes: {
        name: 'Acquiring new clients',
        position: 1,
        deleted_at: null,
        billable: false,
        description: null,
        tracking_enabled: true,
        time_tracking_enabled: true,
        expense_tracking_enabled: true,
        pricing_type_id: 1,
        billing_type_id: 3,
        worked_time: 310,
        unapproved_time: 0,
        billable_time: 0,
        estimated_time: 1200,
        booked_time: 0,
        budgeted_time: 0,
        profit_margin: 0.0,
        unit_id: 1,
        quantity: '20.0',
        discount: null,
        future_booked_time: 0,
        currency: 'HRK',
        currency_default: 'HRK',
        currency_normalized: 'HRK',
        hourly_rate: 10000,
        hourly_rate_default: 10000,
        hourly_rate_normalized: 10000,
        price: 10000,
        price_default: 10000,
        price_normalized: 10000,
        revenue: 0,
        revenue_default: 0,
        revenue_normalized: 0,
        cost: 26563,
        cost_default: 26563,
        cost_normalized: 26563,
        work_cost: 26563,
        work_cost_default: 26563,
        work_cost_normalized: 26563,
        expense_amount: 0,
        expense_amount_default: 0,
        expense_amount_normalized: 0,
        expense_billable_amount: 0,
        expense_billable_amount_default: 0,
        expense_billable_amount_normalized: 0,
        profit: -26563,
        profit_default: -26563,
        profit_normalized: -26563,
        budget_total: 0,
        budget_total_default: 0,
        budget_total_normalized: 0,
        budget_used: 0,
        budget_used_default: 0,
        budget_used_normalized: 0,
        future_revenue: 0,
        future_revenue_default: 0,
        future_revenue_normalized: 0,
        future_budget_used: 0,
        future_budget_used_default: 0,
        future_budget_used_normalized: 0,
        future_cost: 0,
        future_cost_default: 0,
        future_cost_normalized: 0,
        discount_amount: 0,
        discount_amount_default: 0,
        discount_amount_normalized: 0,
      },
      relationships: {
        organization: { data: { type: 'organizations', id: '20540' } },
        service_type: { data: { type: 'service_types', id: '128882' } },
        deal: { data: { type: 'deals', id: '692509' } },
        person: { data: null },
        section: { data: null },
      },
    },
    {
      id: '1687627',
      type: 'services',
      attributes: {
        name: 'Administrative work',
        position: 1,
        deleted_at: null,
        billable: false,
        description: null,
        tracking_enabled: true,
        time_tracking_enabled: true,
        expense_tracking_enabled: true,
        pricing_type_id: 1,
        billing_type_id: 3,
        worked_time: 300,
        unapproved_time: 0,
        billable_time: 0,
        estimated_time: 600,
        booked_time: 1980,
        budgeted_time: 0,
        profit_margin: 0.0,
        unit_id: 1,
        quantity: '10.0',
        discount: null,
        future_booked_time: 1860,
        currency: 'HRK',
        currency_default: 'HRK',
        currency_normalized: 'HRK',
        hourly_rate: 10000,
        hourly_rate_default: 10000,
        hourly_rate_normalized: 10000,
        price: 10000,
        price_default: 10000,
        price_normalized: 10000,
        revenue: 0,
        revenue_default: 0,
        revenue_normalized: 0,
        cost: 25000,
        cost_default: 25000,
        cost_normalized: 25000,
        work_cost: 25000,
        work_cost_default: 25000,
        work_cost_normalized: 25000,
        expense_amount: 0,
        expense_amount_default: 0,
        expense_amount_normalized: 0,
        expense_billable_amount: 0,
        expense_billable_amount_default: 0,
        expense_billable_amount_normalized: 0,
        profit: -25000,
        profit_default: -25000,
        profit_normalized: -25000,
        budget_total: 0,
        budget_total_default: 0,
        budget_total_normalized: 0,
        budget_used: 0,
        budget_used_default: 0,
        budget_used_normalized: 0,
        future_revenue: 0,
        future_revenue_default: 0,
        future_revenue_normalized: 0,
        future_budget_used: 0,
        future_budget_used_default: 0,
        future_budget_used_normalized: 0,
        future_cost: 155000,
        future_cost_default: 155000,
        future_cost_normalized: 155000,
        discount_amount: 0,
        discount_amount_default: 0,
        discount_amount_normalized: 0,
      },
      relationships: {
        organization: { data: { type: 'organizations', id: '20540' } },
        service_type: { data: { type: 'service_types', id: '128883' } },
        deal: { data: { type: 'deals', id: '692509' } },
        person: { data: null },
        section: { data: null },
      },
    },
  ],
  included: [
    {
      id: '128882',
      type: 'service_types',
      attributes: {
        name: 'Business Development',
        category_id: null,
        archived_at: null,
        description: null,
      },
      relationships: { organization: { data: { type: 'organizations', id: '20540' } } },
    },
    {
      id: '692509',
      type: 'deals',
      attributes: {
        name: 'Administration',
        date: '2021-11-20',
        end_date: null,
        number: 9,
        suffix: null,
        time_approval: false,
        expense_approval: false,
        client_access: false,
        deal_type_id: 1,
        budget: true,
        sales_status_id: null,
        sales_status_updated_at: null,
        tag_list: [],
        origin_deal_id: null,
        profit_margin: 0.0,
        discount: null,
        email_key: '4c7c0b84548d8addcb325cdabfdb95a9',
        purchase_order_number: null,
        custom_fields: null,
        position: null,
        service_type_restricted_tracking: false,
        tracking_type_id: 1,
        budget_revamp: true,
        probability: 100,
        budget_warning: null,
        billable_time: 0,
        estimated_time: 1800,
        budgeted_time: 0,
        worked_time: 610,
        time_to_close: null,
        unapproved_entries_count: 0,
        rejected_entries_count: 0,
        lost_comment: null,
        closed_at: null,
        delivered_on: null,
        last_activity_at: '2022-05-20T18:38:57.000+02:00',
        deleted_at: null,
        created_at: '2022-05-20T18:38:57.989+02:00',
        note: null,
        sales_closed_at: null,
        exchange_rate: '1.0',
        exchange_date: '2021-11-20',
        sales_closed_on: null,
        sample_data: true,
        note_interpolated: null,
        todo_count: 0,
        todo_due_date: null,
        currency: 'HRK',
        currency_default: 'HRK',
        currency_normalized: 'HRK',
        revenue: 0,
        revenue_default: 0,
        revenue_normalized: 0,
        services_revenue: 0,
        services_revenue_default: 0,
        services_revenue_normalized: 0,
        cost: 51563,
        cost_default: 51563,
        cost_normalized: 51563,
        profit: -51563,
        profit_default: -51563,
        profit_normalized: -51563,
        invoiced: 0,
        invoiced_default: 0,
        invoiced_normalized: 0,
        pending_invoicing: 0,
        pending_invoicing_default: 0,
        pending_invoicing_normalized: 0,
        draft_invoiced: 0,
        draft_invoiced_default: 0,
        draft_invoiced_normalized: 0,
        expense: 0,
        expense_default: 0,
        expense_normalized: 0,
        budget_total: 0,
        budget_total_default: 0,
        budget_total_normalized: 0,
        budget_used: 0,
        budget_used_default: 0,
        budget_used_normalized: 0,
        projected_revenue: 0,
        projected_revenue_default: 0,
        projected_revenue_normalized: 0,
      },
      relationships: {
        organization: { data: { type: 'organizations', id: '20540' } },
        creator: { data: { type: 'people', id: '271499' } },
        company: { data: { type: 'companies', id: '322330' } },
        document_type: { data: null },
        responsible: { data: { type: 'people', id: '271499' } },
        deal_status: { data: null },
        project: { data: { type: 'projects', id: '204158' } },
        lost_reason: { data: null },
        contract: { data: null },
        contact: { data: null },
        subsidiary: { data: { type: 'subsidiaries', id: '20389' } },
      },
    },
  ],
  links: {
    first: 'https://api.productive.io/api/v2/services?page%5Bnumber%5D=1\u0026page%5Bsize%5D=30',
    last: 'https://api.productive.io/api/v2/services?page%5Bnumber%5D=1\u0026page%5Bsize%5D=30',
  },
  meta: {
    current_page: 1,
    total_pages: 1,
    total_count: 14,
    page_size: 30,
    max_page_size: 200,
    organization_features: {
      custom_fields: { type: 'metered', limit: 15 },
      custom_fields_per_project: { type: 'metered', limit: 10 },
      public_custom_reports: { type: 'metered', limit: 100 },
      private_custom_reports: { type: 'metered', limit: 30 },
      public_project_reports: { type: 'metered', limit: 30 },
      private_project_reports: { type: 'metered', limit: 10 },
      scheduling_placeholders: { type: 'metered', limit: 5 },
      workflows: { type: 'metered', limit: 5 },
      rate_cards: { type: 'metered', limit: 30 },
      teams: { type: 'metered', limit: 20 },
      recycle_bin: { type: 'restricted', available: true, limit: 180 },
      multigrouping: { type: 'switch', available: true },
      client_access_to_budgets: { type: 'switch', available: true },
      subsidiaries: { type: 'switch', available: true },
      time_approvals: { type: 'switch', available: true },
      expenses_approvals: { type: 'switch', available: true },
      timeoff_approvals: { type: 'switch', available: true },
      autotracking: { type: 'switch', available: true },
      forecasting: { type: 'switch', available: true },
      webhooks: { type: 'switch', available: true },
      table_pivoting: { type: 'switch', available: true },
      formula_fields: { type: 'switch', available: true },
      single_sign_on: { type: 'switch', available: true },
      duplicate_tasks: { type: 'switch', available: true },
      billable_time_rounding: { type: 'switch', available: true },
      payment_sync: { type: 'switch', available: true },
      booking_methods: { type: 'switch', available: true },
      import_tasks_csv: { type: 'switch', available: true },
      reactions: { type: 'switch', available: true },
      time_week_view: { type: 'switch', available: true },
      subtasks: { type: 'switch', available: true },
      time_calendar_layout: { type: 'switch', available: true },
      theming: { type: 'switch', available: true },
      remove_branding: { type: 'switch', available: true },
      custom_invoicing_email: { type: 'switch', available: true },
      google_calendar_layout: { type: 'switch', available: true },
      pulse: { type: 'switch', available: true },
      slack: { type: 'switch', available: true },
      task_custom_fields_library: { type: 'switch', available: true },
      timeline_layout: { type: 'switch', available: true },
      comment_visibility: { type: 'switch', available: true },
      time_off_sync: { type: 'switch', available: true },
      time_locking: { type: 'switch', available: true },
      docs: { type: 'switch', available: true },
      scheduling_resource_utilization: { type: 'switch', available: true },
      enforce_two_factor_auth: { type: 'switch', available: true },
      personio_integration: { type: 'switch', available: true },
    },
    settings: {
      systemFlags: {
        setting_type: 'systemFlags',
        value:
          '["adminBillingAccess","allBoardsFiltering","approvalWorkflow","autotrackingRevamp","bookingImport","bookingReportApprovalStatusField","budgetInvoicesTab","budgetTimeExpensesTracking","budget_overrun","bufferedPopupFilterField","calendarEventSync","checkRealtimeEventOrganization","companyDocumentType","companyTimeNavigation","copyProjectBudgets","costRateInsight","cumulativeColumnValues","dealWarningForTodosDisable","deliveryDateOnInvoiceOption","disableProjectReports","documentTypeEmailFieldsRevamp","draftComments","draftInvoiceStatus","economicIntegration","economicSubjectLine","editableTimeEntryReportsVs","emailPerRecipientStatus","emptyFilterBehavior","entitlementInsights","entitlementsImport","entitlementsModal","exactDivisions","expenseImport","expenseModalPerson","feedFiltering","filterablePlaceholders","financialsScheduledCost","fixPredefinedViewsPersistenceFuckup","forecastingForToday","formattingOptions","formattingOptionsWeekdaySetting","formulableCountCol","fortnoxIntegration","generateHolidaysAutomatically","globalSearchRevamp","globalTaskCustomFields","halfDayTimeOff","harvestImport","holidayCalendar","improved_alfred","insightsKacunko","invoiceExporterSettings","invoicesSentOnBulkEdit","kanbanBulkSelection","kanbanLayout","limitProjectInsights","listLayout","minimizedItemsTray","newBookingActions","newTaskPopoverForm","office365Calendar","overheadTables","peopleLastActivityAt","perPeriodBudgetValues","personioIntegration","placeholderWorkingHours","privateComments","progressToFinancialsReport","pulse","quickSearch","quickbooksCodeMapping","rateCards","rateImport","recycleBin","recycleBinDestroyers","remainingTimeRename","repeatingTasks","salesClosedOn","salesStatusBulkEdit","sampleDataWarning","schedulingDateFilters","serviceTypeMerge","servicesInsightUnit","settingsTaskCfsLibrary","showOnlyTotalsByDefault","slackIntegration","slackPulse","slackSettings","sortPopup","subsidiaryOnInvoiceAndBudget","subtasks","syncedInvoiceDueDate","tableViewRevamp","taskModalRework","timeApprovalsInlineEdit","timeEntriesLock","timeEstimateIncludingSubtasks","timeOffStatusSync","timeReportsTotalWorkCost","timelineLayout","timersEndpoint","uniqueCompanyCode","updateInvoiceAttributionDatePeriod","userManagement","viewsRevamp","virtualUser","vsRealtimeReloadOnUpdate","workflows","workflowsListLayoutGrouper","xeroServiceTypeMappings"]',
        updated_at: '2022-05-19T16:19:40.095+02:00',
      },
      vismaEconomicIntegration: {
        setting_type: 'intercom-tag-organizations',
        value:
          '4032\n9684\n11212\n12764\n15065\n16335\n17349\n17717\n18507\n18740\n19276\n19710\n19717\n19725\n19741',
        updated_at: '2022-05-12T15:39:10.288+02:00',
      },
    },
  },
};

export default servicesFixture;