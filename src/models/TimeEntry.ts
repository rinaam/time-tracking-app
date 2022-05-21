export interface TimeEntry {
  id: string;
  type: string;
  attributes: {
    date: string;
    created_at: string;
    time: number;
    billable_time: number;
    note: string;
    track_method_id: number;
    started_at: unknown | null;
    timer_started_at: unknown | null;
    timer_stopped_at: unknown | null;
    approved: boolean;
    approved_at: string;
    updated_at: string;
    calendar_event_id: unknown | null;
    invoiced: boolean;
    overhead: boolean;
    rejected: boolean;
    rejected_reason: unknown | null;
    rejected_at: unknown | null;
    currency: string;
    currency_default: string;
    currency_normalized: string;
    cost: number;
    cost_default: number;
    cost_normalized: number;
    work_cost: number;
    work_cost_default: number;
    work_cost_normalized: number;
    overhead_cost: number;
    overhead_cost_default: number;
    overhead_cost_normalized: number;
    internal_overhead_cost: number;
    internal_overhead_cost_default: number;
    internal_overhead_cost_normalized: number;
    facility_overhead_cost: number;
    facility_overhead_cost_default: number;
    facility_overhead_cost_normalized: number;
  };
  relationships: {
    organization: {
      data: {
        type: string;
        id: string;
      };
    };
    person: {
      data: {
        type: string;
        id: string;
      };
    };
    service: {
      data: {
        type: string;
        id: string;
      };
    };
    task: {
      data: unknown | null;
    };
    approver: {
      data: {
        type: string;
        id: string;
      };
    };
    updater: {
      data: {
        type: string;
        id: string;
      };
    };
    rejecter: {
      data: unknown | null;
    };
  };
}

export interface TimeEntryResponseModel {
  data: TimeEntry[];
  included: {
    id: string;
    type: string;
    attributes: {
      name: string;
      first_name: string;
      last_name: string;
      email: string;
      title: unknown | null;
      joined_at: string;
      last_seen_at: string;
      deactivated_at: unknown | null;
      archived_at: unknown | null;
      role_id: number;
      setting_role_id: unknown | null;
      invited_at: unknown | null;
      is_user: boolean;
      user_id: number;
      tag_list: unknown[];
      avatar_url: unknown | null;
      virtual: boolean;
      custom_fields: unknown | null;
      autotracking: boolean;
      created_at: string;
      placeholder: boolean;
      color_id: unknown | null;
      contact: unknown;
      sample_data: boolean;
      time_unlocked: boolean;
      time_unlocked_on: unknown | null;
      time_unlocked_start_date: unknown | null;
      time_unlocked_end_date: unknown | null;
      time_unlocked_period_id: unknown | null;
      time_unlocked_interval: unknown | null;
      last_activity_at: string;
      two_factor_auth: boolean;
    };
    relationships: {
      organization: {
        data: {
          type: string;
          id: string;
        };
      };
      company: {
        data: {
          type: string;
          id: string;
        };
      };
      subsidiary: {
        data: {
          type: string;
          id: string;
        };
      };
      holiday_calendar: {
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
    next: string;
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
