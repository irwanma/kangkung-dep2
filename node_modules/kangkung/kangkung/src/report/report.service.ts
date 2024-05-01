/* eslint-disable prettier/prettier */
import { Injectable } from '@nestjs/common';
import { data, ReportType } from 'src/data';
import { ReportResponseDto } from 'src/dtos/report.dto';
// import { regisData, education } from './registerEmployee';

interface Report {
  amount: number;
  source: string;
}

interface updateReport {
  amount?: number;
  source?: string;
}

import { v4 as uuid } from 'uuid';

@Injectable()
export class ReportService {
  // getAllEmployee(type: education) {
  //   return regisData.register.filter((register) => register.education === type);
  // }

  getAllReports(type: ReportType): ReportResponseDto[] {
    return data.report
      .filter((report) => report.type === type)
      .map((report) => new ReportResponseDto(report));
  }

  getReportById(type: ReportType, id: string): ReportResponseDto {
    const report = data.report
      .filter((report) => report.type === type)
      .find((report) => report.id === id);

    if (!report) return;

    return new ReportResponseDto(report);
  }

  createReport(
    type: ReportType,
    { amount, source }: Report,
  ): ReportResponseDto {
    const newReport = {
      id: uuid(),
      source,
      amount,
      created_at: new Date(),
      updated_at: new Date(),
      type,
    };
    data.report.push(newReport);
    return new ReportResponseDto(newReport);
  }

  updateReport(
    type: ReportType,
    id: string,
    body: updateReport,
  ): ReportResponseDto {
    const reportToUpdate = data.report
      .filter((report) => report.type === type)
      .find((report) => report.id === id);

    if (!reportToUpdate) return;

    const reportIndex = data.report.findIndex(
      (report) => report.id === reportToUpdate.id,
    );

    data.report[reportIndex] = {
      ...data.report[reportIndex],
      ...body,
      updated_at: new Date(),
    };

    return new ReportResponseDto(data.report[reportIndex]);
  }

  deleteReport(id: string) {
    const reportIndex = data.report.findIndex((report) => report.id === id);

    if (reportIndex === -1) return;

    data.report.splice(reportIndex, 1);
  }
}