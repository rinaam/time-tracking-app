export interface ServicesResponseModel {
  data: {
    id: string;
    type: string;
    attributes: {
      name: string;
      position: number;
      deleted_at: unknown | null;
      billable: boolean;
      description: unknown | null;
      tracking_enabled: boolean;
      time_tracking_enabled: boolean;
      expense_tracking_enabled: boolean;
      pricing_type_id: number;
      billing_type_id: number;
      worked_time: number;
      unapproved_time: number;
      billable_time: number;
      estimated_time: number;
      booked_time: number;
      budgeted_time: number;
      profit_margin: number;
      unit_id: number;
      quantity: string;
      discount: unknown | null;
      future_booked_time: number;
      currency: string;
      currency_default: string;
      currency_normalized: string;
      hourly_rate: number;
      hourly_rate_default: number;
      hourly_rate_normalized: number;
      price: number;
      price_default: number;
      price_normalized: number;
      revenue: number;
      revenue_default: number;
      revenue_normalized: number;
      cost: number;
      cost_default: number;
      cost_normalized: number;
      work_cost: number;
      work_cost_default: number;
      work_cost_normalized: number;
      expense_amount: number;
      expense_amount_default: number;
      expense_amount_normalized: number;
      expense_billable_amount: number;
      expense_billable_amount_default: number;
      expense_billable_amount_normalized: number;
      profit: number;
      profit_default: number;
      profit_normalized: number;
      budget_total: number;
      budget_total_default: number;
      budget_total_normalized: number;
      budget_used: number;
      budget_used_default: number;
      budget_used_normalized: number;
      future_revenue: number;
      future_revenue_default: number;
      future_revenue_normalized: number;
      future_budget_used: number;
      future_budget_used_default: number;
      future_budget_used_normalized: number;
      future_cost: number;
      future_cost_default: number;
      future_cost_normalized: number;
      discount_amount: number;
      discount_amount_default: number;
      discount_amount_normalized: number;
    };
    relationships: {
      organization: {
        data: {
          type: string;
          id: string;
        };
      };
      service_type: {
        data: {
          type: string;
          id: string;
        };
      };
      deal: {
        data: {
          type: string;
          id: string;
        };
      };
      person: {
        data: null;
      };
      section: {
        data: null;
      };
    };
  }[];
  included: {
    id: string;
    type: string;
    attributes: {
      name: string;
      category_id: unknown | null;
      archived_at: unknown | null;
      description: null;
    };
    relationships: {
      organization: {
        data: {
          type: string;
          id: string;
        };
      };
    };
  }[];
  links: {
    first: string;
    last: string;
  };
  meta: {
    current_page: number;
    total_pages: number;
    total_count: number;
    page_size: number;
    max_page_size: number;
    organization_features: {
      custom_fields: {
        type: string;
        limit: number;
      };
      custom_fields_per_project: {
        type: string;
        limit: number;
      };
      public_custom_reports: {
        type: string;
        limit: number;
      };
      private_custom_reports: {
        type: string;
        limit: number;
      };
      public_project_reports: {
        type: string;
        limit: number;
      };
      private_project_reports: {
        type: string;
        limit: number;
      };
      scheduling_placeholders: {
        type: string;
        limit: number;
      };
      workflows: {
        type: string;
        limit: number;
      };
      rate_cards: {
        type: string;
        limit: number;
      };
      teams: {
        type: string;
        limit: number;
      };
      recycle_bin: {
        type: string;
        available: boolean;
        limit: number;
      };
      multigrouping: {
        type: string;
        available: boolean;
      };
      client_access_to_budgets: {
        type: string;
        available: boolean;
      };
      subsidiaries: {
        type: string;
        available: boolean;
      };
      time_approvals: {
        type: string;
        available: boolean;
      };
      expenses_approvals: {
        type: string;
        available: boolean;
      };
      timeoff_approvals: {
        type: string;
        available: boolean;
      };
      autotracking: {
        type: string;
        available: boolean;
      };
      forecasting: {
        type: string;
        available: boolean;
      };
      webhooks: {
        type: string;
        available: boolean;
      };
      table_pivoting: {
        type: string;
        available: boolean;
      };
      formula_fields: {
        type: string;
        available: boolean;
      };
      single_sign_on: {
        type: string;
        available: boolean;
      };
      duplicate_tasks: {
        type: string;
        available: boolean;
      };
      billable_time_rounding: {
        type: string;
        available: boolean;
      };
      payment_sync: {
        type: string;
        available: boolean;
      };
      booking_methods: {
        type: string;
        available: boolean;
      };
      import_tasks_csv: {
        type: string;
        available: boolean;
      };
      reactions: {
        type: string;
        available: boolean;
      };
      time_week_view: {
        type: string;
        available: boolean;
      };
      subtasks: {
        type: string;
        available: boolean;
      };
      time_calendar_layout: {
        type: string;
        available: boolean;
      };
      theming: {
        type: string;
        available: boolean;
      };
      remove_branding: {
        type: string;
        available: boolean;
      };
      custom_invoicing_email: {
        type: string;
        available: boolean;
      };
      google_calendar_layout: {
        type: string;
        available: boolean;
      };
      pulse: {
        type: string;
        available: boolean;
      };
      slack: {
        type: string;
        available: boolean;
      };
      task_custom_fields_library: {
        type: string;
        available: boolean;
      };
      timeline_layout: {
        type: string;
        available: boolean;
      };
      comment_visibility: {
        type: string;
        available: boolean;
      };
      time_off_sync: {
        type: string;
        available: boolean;
      };
      time_locking: {
        type: string;
        available: boolean;
      };
      docs: {
        type: string;
        available: boolean;
      };
      scheduling_resource_utilization: {
        type: string;
        available: boolean;
      };
      enforce_two_factor_auth: {
        type: string;
        available: boolean;
      };
      personio_integration: {
        type: string;
        available: boolean;
      };
    };
    settings: {
      systemFlags: {
        setting_type: string;
        value: string;
        updated_at: string;
      };
      vismaEconomicIntegration: {
        setting_type: string;
        value: string;
        updated_at: string;
      };
    };
  };
}
