import { CustomLegendFieldPreset } from "../../../editor/containers/common/fieldComponentEditor/fields/general/EditorCustomLegendField";
import { DatasetStoryFieldPreset } from "../../../editor/containers/common/fieldComponentEditor/fields/general/EditorDatasetStoryField";
import { LinkButtonFieldPreset } from "../../../editor/containers/common/fieldComponentEditor/fields/general/EditorLinkButtonField";
import { StyleCodeFieldPreset } from "../../../editor/containers/common/fieldComponentEditor/fields/general/EditorStyleCodeField";
import { EditorTimelineCustomizedFieldPreset } from "../../../editor/containers/common/fieldComponentEditor/fields/general/EditorTimelineCustomizedField";

import { FieldBase } from "./base";
import { CustomLegendSchemeValue } from "./customLegendScheme";

export const OPACITY_FIELD = "OPACITY_FIELD";
export type OpacityField = FieldBase<{
  type: typeof OPACITY_FIELD;
  value?: number;
  preset?: {
    defaultValue?: number;
  };
}>;

export const LAYER_DESCRIPTION_FIELD = "LAYER_DESCRIPTION_FIELD";
export type LayerDescriptionField = FieldBase<{
  type: typeof LAYER_DESCRIPTION_FIELD;
  value?: string;
  preset?: {
    description?: string;
  };
}>;

export const LEGEND_DESCRIPTION_FIELD = "LEGEND_DESCRIPTION_FIELD";
export type LegendDescriptionField = FieldBase<{
  type: typeof LEGEND_DESCRIPTION_FIELD;
  value?: string;
  preset?: {
    description?: string;
  };
}>;

export const STYLE_CODE_FIELD = "STYLE_CODE_FIELD";
export type StyleCodeField = FieldBase<{
  type: typeof STYLE_CODE_FIELD;
  value?: {
    opacity?: number;
  };
  preset?: StyleCodeFieldPreset;
}>;

export const APPLY_TIME_VALUE_FIELD = "APPLY_TIME_VALUE_FIELD";
export type ApplyTimeValueField = FieldBase<{
  type: typeof APPLY_TIME_VALUE_FIELD;
  value?: {
    timeBasedDisplay?: boolean;
  };
  preset?: {
    propertyName?: string;
  };
}>;

export const TIMELINE_CUSTOMIZED_FIELD = "TIMELINE_CUSTOMIZED_FIELD";
export type TimelineCustomizedField = FieldBase<{
  type: typeof TIMELINE_CUSTOMIZED_FIELD;
  preset?: EditorTimelineCustomizedFieldPreset;
}>;

export const TIMELINE_MONTH_FIELD = "TIMELINE_MONTH_FIELD";
export type TimelineMonthField = FieldBase<{
  type: typeof TIMELINE_MONTH_FIELD;
}>;

export const PRIORITIZE_PERFORMANCE_GEOJSON_FIELD = "PRIORITIZE_PERFORMANCE_GEOJSON_FIELD";
export type PrioritizePerformanceGeoJSONField = FieldBase<{
  type: typeof PRIORITIZE_PERFORMANCE_GEOJSON_FIELD;
}>;

export const LINK_BUTTON_FIELD = "LINK_BUTTON_FIELD";
export type LinkButtonField = FieldBase<{
  type: typeof LINK_BUTTON_FIELD;
  preset: LinkButtonFieldPreset;
}>;

export const DATASET_STORY_FIELD = "DATASET_STORY_FIELD";
export type DatasetStoryField = FieldBase<{
  type: typeof DATASET_STORY_FIELD;
  preset: DatasetStoryFieldPreset;
}>;

export const CUSTOM_LEGEND_FIELD = "CUSTOM_LEGEND_FIELD";
export type CustomLegendField = FieldBase<{
  type: typeof CUSTOM_LEGEND_FIELD;
  preset: CustomLegendFieldPreset;
  value?: CustomLegendSchemeValue;
}>;

export type GeneralFields =
  | OpacityField
  | LayerDescriptionField
  | LegendDescriptionField
  | StyleCodeField
  | ApplyTimeValueField
  | TimelineCustomizedField
  | TimelineMonthField
  | PrioritizePerformanceGeoJSONField
  | LinkButtonField
  | DatasetStoryField
  | CustomLegendField;
