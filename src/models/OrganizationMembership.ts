import { Person } from './Person';

export interface OrganizationMembership {
  id: string;
  type: string;
  attributes: {
    updated_at: string;
    position: unknown | null;
    tasks_layout_id: number;
    time_reminders: boolean;
    email_notifications: boolean;
    weekly_emails: boolean;
    notification_preference: unknown;
    granular_notification_preferences: unknown;
    preferences: unknown | null;
    tasks_filter_id: unknown | null;
    deals_filter_id: unknown | null;
    projects_filter_id: unknown | null;
    people_filter_id: unknown | null;
    companies_filter_id: unknown | null;
    company_time_filter_id: unknown | null;
    invoices_filter_id: unknown | null;
    budgets_filter_id: unknown | null;
    expenses_filter_id: unknown | null;
    bookings_filter_id: unknown | null;
    payments_filter_id: unknown | null;
    time_reports_filter_id: unknown | null;
    profitability_reports_filter_id: unknown | null;
    salary_reports_filter_id: unknown | null;
    time_entry_reports_filter_id: unknown | null;
    booking_approvals_filter_id: unknown | null;
    expense_approvals_filter_id: unknown | null;
    time_approvals_filter_id: unknown | null;
    docs_filter_id: unknown | null;
    permissions: {
      boards: {
        actions: string[];
        editFields: string[];
      };
      deals: {
        actions: string[];
        showFields: string[];
        editFields: string[];
      };
      discussions: {
        actions: string[];
        editFields: string[];
      };
      entitlements: {
        actions: string[];
        editFields: string[];
      };
      expenses: {
        actions: string[];
        showFields: string[];
        editFields: string[];
      };
      pipelines: {
        actions: string[];
        editFields: string[];
      };
      projects: {
        actions: string[];
        showFields: string[];
        editFields: string[];
      };
      project_assignments: {
        actions: string[];
        editFields: string[];
        conditions: {
          actions: {
            owned: string[];
          };
        };
      };
      salaries: {
        actions: string[];
        showFields: string[];
        editFields: string[];
      };
      services: {
        actions: string[];
        showFields: string[];
        editFields: string[];
      };
      service_type_assignments: {
        actions: string[];
        editFields: string[];
      };
      tasks: {
        actions: string[];
        showFields: string[];
        editFields: string[];
        conditions: {
          actions: unknown;
        };
      };
      task_lists: {
        actions: string[];
        editFields: string[];
      };
      teams: {
        actions: string[];
        editFields: string[];
      };
      time_entries: {
        actions: string[];
        showFields: string[];
        editFields: string[];
        conditions: {
          actions: unknown;
        };
      };
    };
  };
  relationships: {
    tasks_favorite_filter: {
      data: unknown | null;
    };
    deals_favorite_filter: {
      data: unknown | null;
    };
    projects_favorite_filter: {
      data: unknown | null;
    };
    people_favorite_filter: {
      data: unknown | null;
    };
    companies_favorite_filter: {
      data: unknown | null;
    };
    company_time_favorite_filter: {
      data: unknown | null;
    };
    invoices_favorite_filter: {
      data: unknown | null;
    };
    budgets_favorite_filter: {
      data: unknown | null;
    };
    expenses_favorite_filter: {
      data: unknown | null;
    };
    bookings_favorite_filter: {
      data: unknown | null;
    };
    payments_favorite_filter: {
      data: unknown | null;
    };
    time_reports_favorite_filter: {
      data: unknown | null;
    };
    profitability_reports_favorite_filter: {
      data: unknown | null;
    };
    salary_reports_favorite_filter: {
      data: unknown | null;
    };
    time_entry_reports_favorite_filter: {
      data: unknown | null;
    };
    booking_approvals_favorite_filter: {
      data: unknown | null;
    };
    expense_approvals_favorite_filter: {
      data: unknown | null;
    };
    time_approvals_favorite_filter: {
      data: unknown | null;
    };
    docs_favorite_filter: {
      data: unknown | null;
    };
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
    user: {
      data: {
        type: string;
        id: string;
      };
    };
    timer: {
      data: unknown | null;
    };
    organization_membership_counts: {
      data: {
        type: string;
        id: string;
      };
    };
  };
}

export interface OrganizationMembershipResponseModel {
  data: OrganizationMembership[];
  included: Person[];
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
